import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useRecoilState } from 'recoil';
import ApiClient from '@/services/api';
import { Semester } from '@/services/api/types';
import Atoms from '@/atoms';

const useSemesterQuery = (): Semester | undefined => {
  const [{ value, status }] = useRecoilState(Atoms.userSemesterInfo);

  const { data: semesterData } = useQuery<Semester, AxiosError>({
    queryKey: ['semester', `Recoil ${status}`],
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
