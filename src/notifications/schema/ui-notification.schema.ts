import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NotificationType } from '../types/notification.types';

/**
 * Type alias for `UINotificationDocument` which is equivalent to `UINotification`.
 */
export type UINotificationDocument = UINotification;

/**
 * `UINotification` is a class that represents a UI Notification in the system.
 * It is decorated with the `@Schema()` decorator from the `@nestjs/mongoose` package.
 */
@Schema()
export class UINotification {
  /**
   * `companyId` is a property of `UINotification` that represents the ID of the company.
   * It is decorated with the `@Prop()` decorator, making it a required field in the schema.
   */
  @Prop({ required: true })
  companyId: string;

  /**
   * `userId` is a property of `UINotification` that represents the ID of the user.
   * It is decorated with the `@Prop()` decorator, making it a required field in the schema.
   */
  @Prop({ required: true })
  userId: string;

  /**
   * `type` is a property of `UINotification` that represents the type of the notification.
   * It is decorated with the `@Prop()` decorator, making it a required field in the schema.
   * The `enum` option in the decorator specifies that the value of `type` must be one of the values in `NotificationType`.
   */
  @Prop({ required: true, enum: NotificationType })
  type: NotificationType;
}

/**
 * `UINotificationSchema` is a constant that holds the mongoose schema for the `UINotification` class.
 * It is created using the `SchemaFactory.createForClass()` method from the `@nestjs/mongoose` package.
 */
export const UINotificationSchema =
  SchemaFactory.createForClass(UINotification);
