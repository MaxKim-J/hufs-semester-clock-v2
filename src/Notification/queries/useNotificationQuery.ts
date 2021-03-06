import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Notification } from '@shared/services/api/types';
import { getNotification } from '@shared/services/api';

const useNotificationQuery = (): Notification[] | undefined => {
  const { data: notificationData } = useQuery<Notification[], AxiosError>({
    queryKey: 'notification',
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const { data } = await getNotification();
      return data.notifications;
    },
    staleTime: Infinity,
    suspense: true,
  });

  return notificationData;
};

export default useNotificationQuery;
