import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';
import { userSemesterInfo } from '@shared/atoms/userSemesterInfo';
import { getSemester } from '@/_shared/services/api';
import { Semester } from '@/_shared/services/api/types';

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
      const { data } = await getSemester();
      return data;
    },
    enabled: status === 'initialized',
    staleTime: 10000,
  });

  return semesterData;
};

export default useSemesterQuery;
