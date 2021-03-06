import React from 'react';
import { RenderFallbackParams } from '@components/boundries/ErrorBoundary';
import { Text } from '@components/fundamentals/Text';
import Emoji from '@components/fundamentals/Emoji';
import Button from '@components/fundamentals/Button';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import { formatEllipsis } from '@shared/utils/formatHelper';

function DefaultFallback({ error, reset }: RenderFallbackParams) {
  const resetError = () => {
    if (reset !== undefined) {
      reset();
    }
  };

  return (
    <article css={errorArticleStyle}>
      <Emoji emoji="π€­" size="size32" />
      <Text size="size14">
        μλ¬κ° λ°μνμ΅λλ€. Error:{' '}
        {error.response.status ?? formatEllipsis(error.message, 7)}
      </Text>
      <Text size="size14">
        ν΄λΉ νμμ΄ λ°λ³΅λλ€λ©΄, κ°λ°μ μκ° ν­μμ νΌλλ°±μ λ³΄λ΄μ£ΌμΈμ!
      </Text>
      <Spacer />
      <Button noBorder size="size12" type="button" onClick={resetError}>
        <Emoji emoji="π" /> μ¬μλ
      </Button>
    </article>
  );
}

const errorArticleStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DefaultFallback;
