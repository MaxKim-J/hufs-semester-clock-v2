import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Corona } from '@/_shared/services/api/types';
import { getCorona } from '@/_shared/services/api';

const useCoronaQuery = (): Corona | undefined => {
  const { data: coronaData } = useQuery<Corona, AxiosError>({
    queryKey: 'corona',
    queryFn: async () => {
      const { data } = await getCorona();
      return data as Corona;
    },
  });
  return coronaData;
};

export default useCoronaQuery;
