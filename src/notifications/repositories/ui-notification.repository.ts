// ui-notification.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UINotification,
  UINotificationDocument,
} from '../schema/ui-notification.schema';

/**
 * `UINotificationRepository` is a class that provides methods to interact with the `UINotification` model in the database.
 */
@Injectable()
export class UINotificationRepository {
  /**
   * The constructor of the `UINotificationRepository` class.
   * It injects the `UINotification` model into the class.
   *
   * @param uiNotificationModel - The `UINotification` model.
   */
  constructor(
    @InjectModel(UINotification.name)
    private uiNotificationModel: Model<UINotificationDocument>,
  ) {}

  /**
   * `findByUserId` is an asynchronous method that finds all `UINotification` documents with the given `userId`.
   *
   * @param userId - The ID of the user.
   * @returns A promise that resolves to an array of `UINotificationDocument`.
   */
  async findByUserId(userId: string): Promise<UINotificationDocument[]> {
    return this.uiNotificationModel.find({ userId }).exec();
  }

  /**
   * `create` is an asynchronous method that creates a new `UINotification` document in the database.
   *
   * @param companyId - The ID of the company.
   * @param userId - The ID of the user.
   * @param type - The type of the notification.
   * @returns A promise that resolves to the created `UINotificationDocument`.
   */
  async create(
    companyId: string,
    userId: string,
    type: string,
  ): Promise<UINotificationDocument> {
    const notification = new this.uiNotificationModel({
      companyId,
      userId,
      type,
    });
    return notification.save();
  }
}
