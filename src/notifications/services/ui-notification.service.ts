// ui-notification.service.ts
import { Injectable } from '@nestjs/common';
import { UINotificationDocument } from '../schema/ui-notification.schema';
import { UINotificationRepository } from '../repositories/ui-notification.repository';

/**
 * `UINotificationService` is a class that provides a service for interacting with UI Notifications.
 */
@Injectable()
export class UINotificationService {
  /**
   * The constructor of the `UINotificationService` class.
   * It injects the `UINotificationRepository` into the class.
   *
   * @param uiNotificationRepository - The `UINotificationRepository` instance.
   */
  constructor(
    private readonly uiNotificationRepository: UINotificationRepository,
  ) {}

  /**
   * `getByUserId` is an asynchronous method that retrieves all UI Notifications for a given user.
   * It takes one parameter:
   * - `userId`: A string that represents the ID of the user.
   *
   * The method returns a promise that resolves to an array of `UINotificationDocument`.
   *
   * @param userId - The ID of the user.
   * @returns A promise that resolves to an array of `UINotificationDocument`.
   */
  async getByUserId(userId: string): Promise<UINotificationDocument[]> {
    return this.uiNotificationRepository.findByUserId(userId);
  }
}
