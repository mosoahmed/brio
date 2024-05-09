import { Test, TestingModule } from '@nestjs/testing';
import { NotificationController } from '../../controllers/notification.controller';
import { NotificationService } from '../../services/notification.service';
import { UINotificationService } from '../../services/ui-notification.service';
import { NotificationType } from '../../types/notification.types';

describe('NotificationController', () => {
  let controller: NotificationController;
  let notificationService: NotificationService;
  let uiNotificationService: UINotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [
        {
          provide: NotificationService,
          useValue: {
            sendNotification: jest.fn(),
          },
        },
        {
          provide: UINotificationService,
          useValue: {
            getByUserId: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<NotificationController>(NotificationController);
    notificationService = module.get<NotificationService>(NotificationService);
    uiNotificationService = module.get<UINotificationService>(
      UINotificationService,
    );
  });

  describe('sendNotification', () => {
    it('should call notificationService.sendNotification with correct parameters', async () => {
      const companyId = 'company-1';
      const userId = 'user-1';
      const notificationType = NotificationType.HAPPY_BIRTHDAY;

      await controller.sendNotification(companyId, userId, notificationType);

      expect(notificationService.sendNotification).toHaveBeenCalledWith(
        companyId,
        userId,
        notificationType,
      );
    });
  });

  describe('getUINotifications', () => {
    it('should call uiNotificationService.getByUserId with userId', async () => {
      const userId = 'user-1';

      await controller.getUINotifications(userId);

      expect(uiNotificationService.getByUserId).toHaveBeenCalledWith(userId);
    });
  });
});
