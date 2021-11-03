import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Notification } from '@/services/api/types';
import ApiClient from '@/services/api';

const useNotificationQuery = (): Notification[] | undefined => {
  const { data: notificationData } = useQuery<Notification[], AxiosError>({
    queryKey: 'corona',
    queryFn: async () => {
      const { data } = await ApiClient.getNotification();
      return data as Notification[];
    },
  });
  return notificationData;
};

export default useNotificationQuery;
