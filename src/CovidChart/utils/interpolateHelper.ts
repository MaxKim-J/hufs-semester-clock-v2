import { CoronaPerDate } from '@shared/services/api/types';

type InterpolateYOptions = {
  maxY: number;
  minY: number;
  nums: number[];
};

export const interpolateY = ({ nums, maxY, minY }: InterpolateYOptions) => {
  const maxValue = Math.max(...nums);
  const minValue = Math.min(...nums);
  const rate = (maxValue - minValue) / (maxY - minY);
  return nums.map((value) => maxY - (value - minValue) / rate);
};

type InterpolateXOptions = {
  nums: number[];
  width: number;
};

export const interpolateX = ({ nums, width }: InterpolateXOptions) => {
  const interval = Math.floor(width / nums.length);
  const margin = Math.floor(interval / 2);
  return nums.map((_, idx) => idx * interval + margin);
};

type getChartDataOptions = {
  data: CoronaPerDate[];
  interpolatedX: number[];
  interpolatedY: number[];
};

export const getChartDotsData = ({
  data,
  interpolatedX,
  interpolatedY,
}: getChartDataOptions) =>
  data.map((datum, idx) => ({
    ...datum,
    x: interpolatedX[idx],
    y: interpolatedY[idx],
  }));

export const getChartPolylineData = ({
  data,
  interpolatedX,
  interpolatedY,
}: getChartDataOptions) =>
  data.reduce(
    (acc, cur, idx) => `${acc}${interpolatedX[idx]} ${interpolatedY[idx]} `,
    ''
  );

type getInitialChartPolylineDataOptions = Omit<
  getChartDataOptions,
  'interpolatedY'
> & {
  floorY: number;
};

export const getInitialChartPolylineData = ({
  data,
  interpolatedX,
  floorY,
}: getInitialChartPolylineDataOptions) =>
  data.reduce((acc, cur, idx) => `${acc}${interpolatedX[idx]} ${floorY} `, '');
