import { INotificationChannel } from '../core/interfaces';
import { User } from '../models/User';

export class NotificationService {
  private channels: INotificationChannel[] = [];

  constructor(channels: INotificationChannel[] = []) {
    this.channels = channels;
  }

  addChannel(channel: INotificationChannel): void {
    this.channels.push(channel);
  }

  notify(user: User, message: string): void {
    this.channels.forEach((channel) => channel.send(user, message));
  }
}
