// notification.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationController } from './controllers/notification.controller';
import { NotificationService } from './services/notification.service';
import { UINotificationSchema } from './schema/ui-notification.schema';
import { UINotificationRepository } from './repositories/ui-notification.repository';
import { UINotificationService } from './services/ui-notification.service';
import { CompanyMock } from './mocks/company.mock';
import { UserMock } from './mocks/user.mock';
import { EmailChannel } from './channels/email.channel';
import { UIChannel } from './channels/ui.channel';

/**
 * `NotificationModule` is a class that represents a module in the application.
 * It is marked with the `@Module()` decorator, which provides metadata for the module.
 * The module imports the `MongooseModule` and provides the `NotificationController`, `NotificationService`, `UINotificationRepository`, `UINotificationService`, `CompanyMock`, `UserMock`, `EmailChannel`, and `UIChannel`.
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UINotification', schema: UINotificationSchema },
    ]),
  ],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    UINotificationRepository,
    UINotificationService,
    CompanyMock,
    UserMock,
    EmailChannel,
    UIChannel,
  ],
})
export class NotificationModule {}
