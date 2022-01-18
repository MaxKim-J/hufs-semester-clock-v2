import { ChangeEvent, useState, useEffect, useRef, useCallback } from 'react';

type InputValidators = {
  validFunction: (value: string) => boolean;
  errorMessage?: string;
};

type UseInputParams = {
  name: string;
  validators?: InputValidators[];
  initialValue?: string;
};

const useInput = ({
  name,
  validators = [],
  initialValue = '',
}: UseInputParams) => {
  const validatorsRef = useRef(validators).current;

  const [status, setStatus] = useState({
    value: initialValue,
    isError: false,
    errorMessage: '',
  });

  useEffect(() => {
    if (!validatorsRef.length) return;
    for (let i = 0; i < validatorsRef.length; i += 1) {
      const { validFunction, errorMessage } = validatorsRef[i];
      if (!validFunction(status.value)) {
        setStatus((state) => ({
          ...state,
          errorMessage: errorMessage ?? '',
          isError: true,
        }));
        return;
      }
    }
    setStatus((state) => ({ ...state, errorMessage: '', isError: false }));
  }, [status.value, validatorsRef]);

  const handleInput = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const { value } = e.target;
      setStatus((state) => ({ ...state, value }));
    },
    []
  );

  const resetInput = useCallback(() => {
    setStatus((state) => ({ ...state, value: '' }));
  }, []);

  return {
    name,
    resetInput,
    handleInput,
    ...status,
  };
};

export default useInput;
