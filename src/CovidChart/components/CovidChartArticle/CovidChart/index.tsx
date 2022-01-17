import { CoronaPerDate } from '@shared/services/api/types';
import CovidSvgChart from '@/CovidChart/components/CovidChartArticle/CovidChart/CovidSvgChart';
import useCoronaQuery from '@/CovidChart/queries/useCoronaQuery';
import CovidChartLabel from '@/CovidChart/components/CovidChartArticle/CovidChart/CovidChartLabel';

function CovidChart() {
  const covidChartData = useCoronaQuery();

  return (
    <>
      <CovidSvgChart
        width={448}
        height={100}
        data={covidChartData as CoronaPerDate[]}
      />
      <CovidChartLabel data={covidChartData as CoronaPerDate[]} />
    </>
  );
}

export default CovidChart;
