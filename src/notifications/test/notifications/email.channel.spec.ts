import { EmailChannel } from '../../channels/email.channel';
import { NotificationType } from '../../types/notification.types';

describe('EmailChannel', () => {
  let emailChannel: EmailChannel;

  beforeEach(() => {
    emailChannel = new EmailChannel();
  });

  it('should send email notification', async () => {
    const consoleSpy = jest.spyOn(console, 'log');

    await emailChannel.sendNotification(
      'company-1',
      'user-1',
      NotificationType.HAPPY_BIRTHDAY,
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      `Sending email notification of type ${NotificationType.HAPPY_BIRTHDAY} to user user-1 in company company-1`,
    );
  });
});
