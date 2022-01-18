import { useMutation } from 'react-query';
import { postFeedback } from '@shared/services/api';

const useFeedbackMutation = () =>
  useMutation((feedback: string) => postFeedback(feedback));

export default useFeedbackMutation;
