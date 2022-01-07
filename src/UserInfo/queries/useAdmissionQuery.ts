import { useQuery } from 'react-query';
import { Admission } from '@shared/services/api/types';
import { AxiosError } from 'axios';
import { getAdmission } from '@shared/services/api';

const useAdmissionQuery = () => {
  const { data: admissionData } = useQuery<Admission[], AxiosError>({
    queryKey: 'admission',
    queryFn: async () => {
      const { data } = await getAdmission();
      return data;
    },
    suspense: true,
    cacheTime: Infinity,
  });

  return admissionData;
};

export default useAdmissionQuery;
