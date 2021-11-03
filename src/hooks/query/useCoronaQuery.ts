import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Corona } from '@/services/api/types';
import ApiClient from '@/services/api';

const useCoronaQuery = (): Corona | undefined => {
  const { data: coronaData } = useQuery<Corona, AxiosError>({
    queryKey: 'corona',
    queryFn: async () => {
      const { data } = await ApiClient.getCorona();
      return data as Corona;
    },
  });
  return coronaData;
};

export default useCoronaQuery;
