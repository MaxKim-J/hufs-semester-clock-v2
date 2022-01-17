import { CoronaPerDate } from '@shared/services/api/types';
import {
  getChartPolylineData,
  getChartDotsData,
  interpolateX,
  interpolateY,
  getInitialChartPolylineData,
} from '@/CovidChart/utils/interpolateHelper';

type useCovidSvgChartOptions = {
  data: CoronaPerDate[];
  width: number;
  height: number;
  maxY: number;
  minY: number;
};

const useCovidSvgChart = ({
  data,
  width,
  height,
  maxY,
  minY,
}: useCovidSvgChartOptions) => {
  const nums = data.map((value) => value.rate);

  const interpolatedX = interpolateX({
    nums,
    width,
  });

  const interpolatedY = interpolateY({
    nums,
    maxY,
    minY,
  });

  const chartPolylineData = getChartPolylineData({
    data,
    interpolatedX,
    interpolatedY,
  });

  const initialChartPolylineData = getInitialChartPolylineData({
    data,
    interpolatedX,
    floorY: height,
  });

  const chartDotsData = getChartDotsData({
    data,
    interpolatedX,
    interpolatedY,
  });

  return { chartPolylineData, initialChartPolylineData, chartDotsData };
};

export default useCovidSvgChart;
