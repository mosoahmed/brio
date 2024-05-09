// ui.channel.ts
import { Injectable } from '@nestjs/common';
import { NotificationType } from '../types/notification.types';
import { UINotificationRepository } from '../repositories/ui-notification.repository';
import { Channel } from '../interfaces/channel.interface';

/**
 * `UIChannel` is a class that implements the `Channel` interface.
 */
@Injectable()
export class UIChannel implements Channel {
  /**
   * The constructor of the `UIChannel` class.
   * It injects the `UINotificationRepository` into the class.
   *
   * @param uiNotificationRepository - The `UINotificationRepository` instance.
   */
  constructor(
    private readonly uiNotificationRepository: UINotificationRepository,
  ) {}

  /**
   * `sendNotification` is an asynchronous method that sends a UI notification.
   * It takes three parameters:
   * - `companyId`: A string that represents the ID of the company.
   * - `userId`: A string that represents the ID of the user.
   * - `notificationType`: A value of type `NotificationType` that represents the type of the notification.
   *
   * The method creates a new `UINotification` in the database using the `UINotificationRepository` and logs a message to the console.
   * It does not return a value.
   */
  async sendNotification(
    companyId: string,
    userId: string,
    notificationType: NotificationType,
  ): Promise<void> {
    await this.uiNotificationRepository.create(
      companyId,
      userId,
      notificationType,
    );
    console.log(
      `Sending UI notification of type ${notificationType} to user ${userId} in company ${companyId}`,
    );
  }
}
