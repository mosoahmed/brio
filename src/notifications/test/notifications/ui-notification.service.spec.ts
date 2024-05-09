// ui-notification.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UINotificationService } from '../../services/ui-notification.service';
import {
  UINotification,
  UINotificationDocument,
} from '../../schema/ui-notification.schema';
import { UINotificationRepository } from '../../repositories/ui-notification.repository';
import { NotificationType } from '../../types/notification.types';

describe('UINotificationService', () => {
  let uiNotificationService: UINotificationService;
  let uiNotificationRepository: UINotificationRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UINotificationService,
        {
          provide: UINotificationRepository,
          useValue: {
            findByUserId: jest.fn(),
          },
        },
        {
          provide: getModelToken(UINotification.name),
          useValue: Model,
        },
      ],
    }).compile();

    uiNotificationService = module.get<UINotificationService>(
      UINotificationService,
    );
    uiNotificationRepository = module.get<UINotificationRepository>(
      UINotificationRepository,
    );
  });

  it('should get UI notifications by user ID', async () => {
    const userId = 'user-1';
    const mockNotifications: UINotificationDocument[] = [
      {
        companyId: 'company-1',
        userId: 'user-1',
        type: NotificationType.HAPPY_BIRTHDAY,
      },
      {
        companyId: 'company-1',
        userId: 'user-1',
        type: NotificationType.LEAVE_BALANCE_REMINDER,
      },
    ];

    jest
      .spyOn(uiNotificationRepository, 'findByUserId')
      .mockResolvedValue(mockNotifications);

    const result = await uiNotificationService.getByUserId(userId);

    expect(uiNotificationRepository.findByUserId).toHaveBeenCalledWith(userId);
    expect(result).toEqual(mockNotifications);
  });
});
