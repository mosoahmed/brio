import { Injectable } from '@nestjs/common';
import { EmailChannel } from '../channels/email.channel';
import { UIChannel } from '../channels/ui.channel';
import { NotificationType } from '../types/notification.types';
import { Channel } from '../interfaces/channel.interface';
import { CompanyMock } from '../mocks/company.mock';
import { UserMock } from '../mocks/user.mock';

/**
 * `NotificationService` is a class that provides a service for sending notifications.
 */
@Injectable()
export class NotificationService {
  /**
   * The constructor of the `NotificationService` class.
   * It injects the `EmailChannel`, `UIChannel`, `CompanyMock`, and `UserMock` into the class.
   *
   * @param emailChannel - The `EmailChannel` instance.
   * @param uiChannel - The `UIChannel` instance.
   * @param companyMock - The `CompanyMock` instance.
   * @param userMock - The `UserMock` instance.
   */
  constructor(
    private readonly emailChannel: EmailChannel,
    private readonly uiChannel: UIChannel,
    private readonly companyMock: CompanyMock,
    private readonly userMock: UserMock,
  ) {}

  /**
   * `sendNotification` is an asynchronous method that sends a notification.
   * It takes three parameters:
   * - `companyId`: A string that represents the ID of the company.
   * - `userId`: A string that represents the ID of the user.
   * - `notificationType`: A value of type `NotificationType` that represents the type of the notification.
   *
   * The method retrieves the company and user information, determines the channels for the notification type,
   * checks if the user is subscribed to the channel, and sends the notification if they are.
   * It does not return a value.
   */
  async sendNotification(
    companyId: string,
    userId: string,
    notificationType: NotificationType,
  ): Promise<void> {
    const company = await this.companyMock.getCompany(companyId);
    const user = await this.userMock.getUser(userId);

    if (!company || !user) {
      throw new Error('Invalid company or user');
    }
    const channels = this.getChannelsForNotificationType(notificationType);

    for (const channel of channels) {
      const isSubscribed = await this.isSubscribed(companyId, userId, channel);
      if (isSubscribed) {
        await channel.sendNotification(companyId, userId, notificationType);
      }
    }
  }

  /**
   * `getChannelsForNotificationType` is a private method that determines the channels for a given notification type.
   * It takes one parameter:
   * - `notificationType`: A value of type `NotificationType` that represents the type of the notification.
   *
   * The method returns an array of `Channel`.
   */
  private getChannelsForNotificationType(
    notificationType: NotificationType,
  ): Channel[] {
    switch (notificationType) {
      case NotificationType.LEAVE_BALANCE_REMINDER:
        return [this.uiChannel];
      case NotificationType.MONTHLY_PAYSLIP:
        return [this.emailChannel];
      case NotificationType.HAPPY_BIRTHDAY:
        return [this.emailChannel, this.uiChannel];
      default:
        throw new Error(`Invalid notification type: ${notificationType}`);
    }
  }

  /**
   * `isSubscribed` is a private asynchronous method that checks if a user is subscribed to a channel.
   * It takes three parameters:
   * - `companyId`: A string that represents the ID of the company.
   * - `userId`: A string that represents the ID of the user.
   * - `channel`: An instance of `Channel`.
   *
   * The method returns a promise that resolves to a boolean.
   * Note: This is a mock implementation for demo purposes.
   */
  private async isSubscribed(
    companyId: string,
    userId: string,
    channel: Channel,
  ): Promise<boolean> {
    return true;
  }
}
