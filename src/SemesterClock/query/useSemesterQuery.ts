import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { getSemester } from '@shared/services/api';
import { Semesters } from '@shared/services/api/types';

const useSemesterQuery = () => {
  const { data: semesterData } = useQuery<Semesters, AxiosError>({
    queryKey: ['semester'],
    queryFn: async () => {
      const { data } = await getSemester();
      return data;
    },
    staleTime: Infinity,
    suspense: true,
  });

  return { semesterData };
};

export default useSemesterQuery;
