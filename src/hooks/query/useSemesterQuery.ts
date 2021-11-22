import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';
import ApiClient from '@/services/api';
import { Semester } from '@/services/api/types';
import { userSemesterInfo } from '@/atoms';

const useSemesterQuery = (): Semester | undefined => {
  const { status, value } = useRecoilValue(userSemesterInfo);

  const { data: semesterData } = useQuery<Semester, AxiosError>({
    queryKey: [
      'semester',
      `${status}-${value === null ? 'request' : 'storage'}`,
    ],
    queryFn: async () => {
      if (value !== null) {
        return value;
      }
      const { data } = await ApiClient.getSemester();
      return data;
    },
    enabled: status === 'initialized',
    staleTime: 10000,
  });

  return semesterData;
};

export default useSemesterQuery;
