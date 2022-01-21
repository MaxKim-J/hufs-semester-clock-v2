import { m, MotionConfig } from 'framer-motion';
import { CoronaPerDate } from '@shared/services/api/types';
import { css } from '@emotion/react';
import { colorTable } from '@style/variables';
import { formatNumber } from '@shared/utils/formatHelper';
import {
  getChartDotsData,
  getChartPolylineData,
  interpolateX,
  interpolateY,
} from '@/CovidChart/utils/interpolateHelper';

type CovidSvgChartProps = {
  width: number;
  height: number;
  xMargin: number;
  yMargin: number;
  data: CoronaPerDate[];
};

function CovidSvgChart({
  width,
  height,
  data,
  xMargin,
  yMargin,
}: CovidSvgChartProps) {
  const nums = data.map((value) => value.rate);

  const interpolatedX = interpolateX({
    nums,
    width,
    xMargin,
  });

  const interpolatedY = interpolateY({
    nums,
    height,
    yMargin,
  });

  const chartPolylineData = getChartPolylineData({
    data,
    interpolatedX,
    interpolatedY,
  });

  const initialChartPolylineData = getChartPolylineData({
    data,
    interpolatedX,
    interpolatedY: Array(nums.length).fill(height),
  });

  const chartDotsData = getChartDotsData({
    data,
    interpolatedX,
    interpolatedY,
  });

  return (
    <MotionConfig transition={{ duration: 0.5, ease: 'backOut' }}>
      <svg viewBox={`0 0 ${width} ${height}`} aria-hidden>
        <line x1="0" y1={height} x2={width} y2={height} css={xAxisStyle} />
        <m.polyline
          css={polylineStyle}
          initial={{ points: initialChartPolylineData }}
          animate={{ points: chartPolylineData }}
        />
        {chartDotsData.map((dot) => (
          <g key={dot.day}>
            <m.text
              x={dot.x}
              y={dot.y - 10}
              css={dotLabelStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {formatNumber(dot.rate)}명
            </m.text>
            <m.line
              x1={dot.x}
              y1={height}
              x2={dot.x}
              css={pointLineStyle}
              initial={{ y2: height }}
              animate={{ y2: dot.y }}
            />
            <m.circle
              cx={dot.x}
              r="5"
              css={dotStyle}
              initial={{ cy: height }}
              animate={{ cy: dot.y }}
            />
          </g>
        ))}
      </svg>
    </MotionConfig>
  );
}

const xAxisStyle = css`
  stroke: black;
  stroke-width: 2;
`;

const polylineStyle = css`
  stroke-width: 3;
  stroke: ${colorTable.blue};
  fill: none;
`;

const dotLabelStyle = css`
  text-anchor: middle;
  fill: ${colorTable.black};
  font: bold 10px sans-serif;
`;

const pointLineStyle = css`
  stroke-dasharray: 5, 5;
  stroke: ${colorTable.black};
`;

const dotStyle = css`
  fill: ${colorTable.white};
  stroke-width: 2;
  stroke: ${colorTable.blue};
`;

export default CovidSvgChart;
