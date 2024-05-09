/**
 * The `NotificationType` is imported from the `notification.types` file.
 */
import { NotificationType } from '../types/notification.types';

/**
 * The `Channel` interface is a contract for any class that wants to implement it.
 * It contains a single method `sendNotification` which is expected to be implemented by any class that uses this interface.
 */
export interface Channel {
  /**
   * The `sendNotification` method is a function that takes in three parameters:
   * - `companyId`: A string representing the ID of the company.
   * - `userId`: A string representing the ID of the user.
   * - `notificationType`: A value of type `NotificationType`.
   * The method returns a `Promise` that resolves to `void`.
   */
  sendNotification(
    companyId: string,
    userId: string,
    notificationType: NotificationType,
  ): Promise<void>;
}
