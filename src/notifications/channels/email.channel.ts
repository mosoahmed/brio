import { Injectable } from '@nestjs/common';
import { NotificationType } from '../types/notification.types';
import { Channel } from '../interfaces/channel.interface';

/**
 * `EmailChannel` is a class that implements the `Channel` interface.
 * It is marked as `Injectable`, meaning it can be provided and injected as a dependency.
 */
@Injectable()
export class EmailChannel implements Channel {
  /**
   * `sendNotification` is an asynchronous method that sends a notification.
   * It takes three parameters:
   * - `companyId`: A string that represents the ID of the company.
   * - `userId`: A string that represents the ID of the user.
   * - `notificationType`: A value of type `NotificationType` that represents the type of the notification.
   *
   * The method logs a message to the console and does not return a value.
   */
  async sendNotification(
    companyId: string,
    userId: string,
    notificationType: NotificationType,
  ): Promise<void> {
    console.log(
      `Sending email notification of type ${notificationType} to user ${userId} in company ${companyId}`,
    );
  }
}
