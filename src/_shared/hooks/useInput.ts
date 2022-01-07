import { ChangeEvent, useState, useEffect, useRef } from 'react';

type InputValidators = {
  validFunction: (value: string) => boolean;
  errorMessage: string;
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
        setStatus((state) => ({ ...state, errorMessage, isError: true }));
        return;
      }
    }
    setStatus((state) => ({ ...state, errorMessage: '', isError: false }));
  }, [status.value, validatorsRef]);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setStatus((state) => ({ ...state, value: e.target.value }));
  };

  return {
    name,
    handleInput,
    ...status,
  };
};

export default useInput;
