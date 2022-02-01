import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { CoronaPerDate } from '@shared/services/api/types';
import { getCorona } from '@shared/services/api';

const useCoronaQuery = (): CoronaPerDate[] | undefined => {
  const { data: coronaData } = useQuery<CoronaPerDate[], AxiosError>({
    queryKey: 'corona',
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const { data } = await getCorona();
      return data.total;
    },
    suspense: true,
  });

  return coronaData;
};

export default useCoronaQuery;
