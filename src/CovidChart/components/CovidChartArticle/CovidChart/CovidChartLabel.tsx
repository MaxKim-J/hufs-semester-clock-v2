import { CoronaPerDate } from '@shared/services/api/types';
import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';
import { formatMonthAndDay } from '@/_shared/utils/formatHelper';

type CovidChartLabelProps = {
  data: CoronaPerDate[];
};

function CovidChartLabel({ data }: CovidChartLabelProps) {
  return (
    <ol css={listStyle}>
      {data.map((datum) => (
        <li
          key={datum.day}
          css={listItemStyle}
          aria-label={`${formatMonthAndDay(datum.day, '.')}에 코로나 확진자 ${
            datum.rate
          }명 발생`}
        >
          <Text color="black" size="size12" aria-hidden>
            {datum.day}
          </Text>
        </li>
      ))}
    </ol>
  );
}

const listStyle = css`
  display: flex;
`;

const listItemStyle = css`
  margin: 0 1.25rem;
  width: 2rem;
  text-align: center;
`;

export default CovidChartLabel;
