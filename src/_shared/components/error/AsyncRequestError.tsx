import React from 'react';
import { AxiosResponse } from 'axios';
import { RenderFallbackParams } from '@/_shared/components/boundries/ErrorBoundary';

function AsyncRequestError({ error, reset }: RenderFallbackParams) {
  const { status } = error.response as AxiosResponse;

  const resetError = () => {
    if (reset !== undefined) {
      reset();
    }
  };

  const render = () => {
    switch (status) {
      case 404:
      case 400:
      case 500:
        return <div onClick={resetError}>오류, 재시도</div>;
      default:
        return <div>알 수 없는 에러</div>;
    }
  };

  return render();
}

export default AsyncRequestError;
