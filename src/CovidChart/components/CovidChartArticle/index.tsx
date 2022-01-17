import BoxLayout from '@components/fundamentals/BoxLayout';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import CovidChart from '@/CovidChart/components/CovidChartArticle/CovidChart';

function CovidChartArticle() {
  return (
    <BoxLayout title="코로나 현황">
      <AsyncBoundaryWithQuery pendingFallback={<div>로딩</div>}>
        <Spacer height="size8" />
        <Text size="size12" color="darkGray">
          7일간의 전국 코로나 확진자수 그래프입니다.
        </Text>
        <Spacer height="size8" />
        <CovidChart />
      </AsyncBoundaryWithQuery>
    </BoxLayout>
  );
}

export default CovidChartArticle;
