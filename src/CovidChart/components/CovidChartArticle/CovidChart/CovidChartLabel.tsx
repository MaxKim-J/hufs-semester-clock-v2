import { CoronaPerDate } from '@shared/services/api/types';
import { formatCovidDay } from '@/CovidChart/utils/covidChartHelper';
import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';

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
          aria-label={`${formatCovidDay(datum.day)}에 확진자 ${
            datum.rate
          }명 발생`}
        >
          <Text color="black" size="size14" aria-hidden>
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
  margin: 0 calc(1rem + 1.25px);
`;

export default CovidChartLabel;
