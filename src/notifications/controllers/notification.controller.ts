// notification.controller.ts
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { NotificationService } from '../services/notification.service';
import { NotificationType } from '../types/notification.types';
import { UINotificationService } from '../services/ui-notification.service';

/**
 * `NotificationController` is a class that handles HTTP requests related to Notifications.
 * It is marked with the `@Controller()` decorator, with 'notifications' as the route path prefix for its methods.
 */
@Controller('notifications')
export class NotificationController {
  /**
   * The constructor of the `NotificationController` class.
   * It injects the `NotificationService` and `UINotificationService` into the class.
   *
   * @param notificationService - The `NotificationService` instance.
   * @param uiNotificationService - The `UINotificationService` instance.
   */
  constructor(
    private readonly notificationService: NotificationService,
    private readonly uiNotificationService: UINotificationService,
  ) {}

  /**
   * `sendNotification` is an asynchronous method that handles POST requests to the '/send' path.
   * It takes three parameters from the request body:
   * - `companyId`: A string that represents the ID of the company.
   * - `userId`: A string that represents the ID of the user.
   * - `notificationType`: A value of type `NotificationType` that represents the type of the notification.
   *
   * The method calls the `sendNotification` method of the `NotificationService` and does not return a value.
   */
  @Post('send')
  async sendNotification(
    @Body('companyId') companyId: string,
    @Body('userId') userId: string,
    @Body('type') notificationType: NotificationType,
  ): Promise<void> {
    return this.notificationService.sendNotification(
      companyId,
      userId,
      notificationType,
    );
  }

  /**
   * `getUINotifications` is an asynchronous method that handles GET requests to the '/ui/:userId' path.
   * It takes one parameter from the request parameters:
   * - `userId`: A string that represents the ID of the user.
   *
   * The method calls the `getByUserId` method of the `UINotificationService` and returns a promise that resolves to any value.
   */
  @Get('ui/:userId')
  async getUINotifications(@Param('userId') userId: string): Promise<any> {
    return this.uiNotificationService.getByUserId(userId);
  }
}
