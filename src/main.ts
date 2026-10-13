import { User } from './models/User';
import { Logger } from './services/Logger';
import { EmailNotification } from './services/EmailNotification';
import { SMSNotification } from './services/SMSNotification';
import { PushNotification } from './services/PushNotification';
import { NotificationService } from './services/NotificationService';

const logger = new Logger();

const emailService = new EmailNotification(logger);
const smsService = new SMSNotification(logger);
const pushService = new PushNotification(logger);

const notificationService = new NotificationService([
  emailService,
  smsService,
  pushService,
]);

const user = new User(
  'user@example.com',
  '+1234567890',
  'device-token-123'
);

notificationService.notify(user, 'Ваш платіж оброблено успішно!');