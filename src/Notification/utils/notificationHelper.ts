import { formatDigits, formatEllipsis } from '@shared/utils/formatHelper';
import { Notification } from '@shared/services/api/types';
import format from 'date-fns/format';

export const getNotificationString = (notification: Notification) =>
  `${formatDigits(notification.id + 1)}.(${format(
    new Date(notification.date),
    'MM-dd'
  )}) ${formatEllipsis(notification.title, 35)}`;
