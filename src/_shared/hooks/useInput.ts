import { ChangeEvent, useState, useEffect } from 'react';
import applyDebounce from 'lodash.debounce';

type InputValidators = {
  validFunction: (value: string) => boolean;
  errorMessage: string;
};

type UseInputParams = {
  validators?: InputValidators[];
  initialValue?: string;
  debounce?: boolean;
  wait?: number;
};

const useInput = ({
  validators = [],
  initialValue = '',
  debounce = false,
  wait = 100,
}: UseInputParams) => {
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState({
    isError: false,
    errorMessage: '',
  });

  useEffect(() => {
    if (!validators.length) return;
    for (let i = 0; i < validators.length; i += 1) {
      const { validFunction, errorMessage } = validators[i];
      if (!validFunction(value)) {
        setStatus({ errorMessage, isError: true });
        return;
      }
    }
    setStatus({ errorMessage: '', isError: false });
  }, [value, validators]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    handleInput: debounce ? applyDebounce(handleInput, wait) : handleInput,
    status,
    value,
  };
};

export default useInput;
