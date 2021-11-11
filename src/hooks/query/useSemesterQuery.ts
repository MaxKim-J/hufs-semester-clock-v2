import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import ApiClient from '@/services/api';
import { Semester } from '@/services/api/types';
import { StorageAtom } from '@/atoms/types';

const useSemesterQuery = (
  semesterInfo: StorageAtom<Semester>
): Semester | undefined => {
  const { status, value } = semesterInfo;

  const { data: semesterData } = useQuery<Semester, AxiosError>({
    queryKey: [
      'semester',
      `${status}-${value === null ? 'request' : 'storage'}`,
    ],
    queryFn: async () => {
      if (value !== null) {
        return value as Semester;
      }
      const { data } = await ApiClient.getSemester();
      return data as Semester;
    },
    enabled: status === 'initialized',
  });

  return semesterData;
};

export default useSemesterQuery;
