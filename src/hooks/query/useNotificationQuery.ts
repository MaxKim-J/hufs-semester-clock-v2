import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Notification } from '@/_shared/services/api/types';
import { getNotification } from '@/_shared/services/api';

const useNotificationQuery = (): Notification[] | undefined => {
  const { data: notificationData } = useQuery<Notification[], AxiosError>({
    queryKey: 'corona',
    queryFn: async () => {
      const { data } = await getNotification();
      return data as Notification[];
    },
  });
  return notificationData;
};

export default useNotificationQuery;
