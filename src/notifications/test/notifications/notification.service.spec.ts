// notification.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { EmailChannel } from '../../channels/email.channel';
import { UIChannel } from '../../channels/ui.channel';
import { NotificationService } from '../../services/notification.service';
import { NotificationType } from '../../types/notification.types';
import { CompanyMock } from '../../mocks/company.mock';
import { UserMock } from '../../mocks/user.mock';
import { UINotificationRepository } from '../../repositories/ui-notification.repository';
import { UINotificationService } from '../../services/ui-notification.service';
import { getModelToken } from '@nestjs/mongoose';
import { UINotification } from '../../schema/ui-notification.schema';

describe('NotificationService', () => {
  let notificationService: NotificationService;
  let emailChannel: EmailChannel;
  let uiChannel: UIChannel;
  const mockUINotificationModel = jest.fn().mockReturnValue({
    save: jest.fn().mockResolvedValue({}),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationService,
        UINotificationRepository,
        UINotificationService,
        CompanyMock,
        UserMock,
        EmailChannel,
        UIChannel,
        {
          provide: getModelToken(UINotification.name),
          useValue: mockUINotificationModel,
        },
      ],
    }).compile();

    notificationService = module.get<NotificationService>(NotificationService);
    emailChannel = module.get<EmailChannel>(EmailChannel);
    uiChannel = module.get<UIChannel>(UIChannel);
  });

  it('should send email notification for monthly payslip', async () => {
    const sendNotificationSpy = jest.spyOn(emailChannel, 'sendNotification');

    await notificationService.sendNotification(
      'company-1',
      'user-1',
      NotificationType.MONTHLY_PAYSLIP,
    );

    expect(sendNotificationSpy).toHaveBeenCalledWith(
      'company-1',
      'user-1',
      NotificationType.MONTHLY_PAYSLIP,
    );
  });

  it('should send UI notification for leave balance reminder', async () => {
    const sendNotificationSpy = jest.spyOn(uiChannel, 'sendNotification');

    await notificationService.sendNotification(
      'company-1',
      'user-1',
      NotificationType.LEAVE_BALANCE_REMINDER,
    );

    expect(sendNotificationSpy).toHaveBeenCalledWith(
      'company-1',
      'user-1',
      NotificationType.LEAVE_BALANCE_REMINDER,
    );
  });

  it('should send email and UI notifications for happy birthday', async () => {
    const emailSendSpy = jest.spyOn(emailChannel, 'sendNotification');
    const uiSendSpy = jest.spyOn(uiChannel, 'sendNotification');

    await notificationService.sendNotification(
      'company-1',
      'user-1',
      NotificationType.HAPPY_BIRTHDAY,
    );

    expect(emailSendSpy).toHaveBeenCalledWith(
      'company-1',
      'user-1',
      NotificationType.HAPPY_BIRTHDAY,
    );
    expect(uiSendSpy).toHaveBeenCalledWith(
      'company-1',
      'user-1',
      NotificationType.HAPPY_BIRTHDAY,
    );
  });

  it('should throw an error for invalid notification type', async () => {
    await expect(
      notificationService.sendNotification(
        'company-1',
        'user-1',
        'invalid-type' as NotificationType,
      ),
    ).rejects.toThrow('Invalid notification type: invalid-type');
  });
});
