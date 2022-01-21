import { CoronaPerDate } from '@shared/services/api/types';

type InterpolateYOptions = {
  nums: number[];
  yMargin: number;
  height: number;
};

export const interpolateY = ({
  nums,
  height,
  yMargin,
}: InterpolateYOptions) => {
  const maxValue = Math.max(...nums);
  const minValue = Math.min(...nums);
  const rate = (maxValue - minValue) / (height - 2 * yMargin);
  return nums.map((value) => height - yMargin - (value - minValue) / rate);
};

type InterpolateXOptions = {
  nums: number[];
  width: number;
  xMargin: number;
};

export const interpolateX = ({ nums, width, xMargin }: InterpolateXOptions) => {
  const interval = Math.floor((width - xMargin * 2) / (nums.length - 1));
  return nums.map((_, idx) => idx * interval + xMargin);
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
