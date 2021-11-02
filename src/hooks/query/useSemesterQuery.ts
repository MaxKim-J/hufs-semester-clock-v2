import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import StorageClient from '@/services/storage';
import ApiClient from '@/services/api';
import { Semester } from '@/services/api/types';

const useSemesterQuery = (): Semester | undefined => {
  const { data: semesterData } = useQuery<Semester, AxiosError>({
    queryKey: 'semester',
    queryFn: async () => {
      const { result, value } = await StorageClient.getItem('userSemesterInfo');
      if (result === 'success') {
        return value as Semester;
      }
      const { data } = await ApiClient.getSemester();
      return data as Semester;
    },
  });

  return semesterData;
};

export default useSemesterQuery;
