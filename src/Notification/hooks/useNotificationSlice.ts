import { useState } from 'react';
import { Notification } from '@shared/services/api/types';

type useNotificationSliceOptions = {
  notiPerIndex: number;
  notiLength: number;
};

const useNotificationSlice = ({
  notiPerIndex,
  notiLength,
}: useNotificationSliceOptions) => {
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    if (index >= Math.floor(notiLength / notiPerIndex) - 1) return;
    setIndex((s) => s + 1);
  };

  const decreaseIndex = () => {
    if (index <= 0) return;
    setIndex((s) => s - 1);
  };

  const sliceNotifications = (notifications: Notification[]): Notification[] =>
    notifications.slice(notiPerIndex * index, notiPerIndex * (index + 1));

  return { index, increaseIndex, decreaseIndex, sliceNotifications };
};

export default useNotificationSlice;
