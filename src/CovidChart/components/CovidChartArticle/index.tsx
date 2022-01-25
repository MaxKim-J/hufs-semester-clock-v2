import BoxLayout from '@components/fundamentals/BoxLayout';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import CovidChart from '@/CovidChart/components/CovidChartArticle/CovidChart';
import CovidChartArticleSkeleton from '@/CovidChart/components/CovidChartArticle/CovidChartArticleSkeleton';

function CovidChartArticle() {
  return (
    <BoxLayout title="코로나 현황" labelId="covid-charts">
      <AsyncBoundaryWithQuery pendingFallback={<CovidChartArticleSkeleton />}>
        <Spacer height="size8" />
        <Text size="size12" color="darkGray">
          7일간의 전국 코로나 확진자수 그래프입니다.
        </Text>
        <CovidChart />
      </AsyncBoundaryWithQuery>
    </BoxLayout>
  );
}

export default CovidChartArticle;
