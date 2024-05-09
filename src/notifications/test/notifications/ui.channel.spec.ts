// ui.channel.spec.ts
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { UIChannel } from '../../channels/ui.channel';
import { NotificationType } from '../../types/notification.types';
import {
  UINotification,
  UINotificationDocument,
} from '../../schema/ui-notification.schema';
import { UINotificationRepository } from '../../repositories/ui-notification.repository';

describe('UIChannel', () => {
  let uiChannel: UIChannel;
  let uiNotificationModel: Model<UINotificationDocument>;
  const mockSave = jest.fn().mockResolvedValue({});
  const mockUINotificationModel = jest.fn().mockReturnValue({
    save: mockSave,
  });
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UIChannel,
        UINotificationRepository,
        {
          provide: getModelToken(UINotification.name),
          useValue: mockUINotificationModel,
        },
      ],
    }).compile();

    uiChannel = module.get<UIChannel>(UIChannel);
    uiNotificationModel = module.get<Model<UINotificationDocument>>(
      getModelToken(UINotification.name),
    );
  });

  it('should send UI notification', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const saveSpy = jest.spyOn(mockUINotificationModel(), 'save');

    await uiChannel.sendNotification(
      'company-1',
      'user-1',
      NotificationType.HAPPY_BIRTHDAY,
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      `Sending UI notification of type ${NotificationType.HAPPY_BIRTHDAY} to user user-1 in company company-1`,
    );
    expect(saveSpy).toHaveBeenCalled();
  });
});
