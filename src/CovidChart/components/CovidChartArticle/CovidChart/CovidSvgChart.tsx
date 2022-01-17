import { motion, MotionConfig } from 'framer-motion';
import { CoronaPerDate } from '@shared/services/api/types';
import { css } from '@emotion/react';
import { colorTable } from '@style/variables';
import { formatNumber } from '@shared/utils/formatHelper';
import useCovidSvgChart from '@/CovidChart/hooks/useCovidSvgChart';

type CovidSvgChartProps = {
  width: number;
  height: number;
  data: CoronaPerDate[];
};

function CovidSvgChart({ width, height, data }: CovidSvgChartProps) {
  const { initialChartPolylineData, chartPolylineData, chartDotsData } =
    useCovidSvgChart({
      data,
      width,
      height,
      maxY: 80,
      minY: 20,
    });

  return (
    <MotionConfig transition={{ duration: 0.5, ease: 'backOut' }}>
      <svg viewBox={`0 0 ${width} ${height}`} aria-hidden>
        <line x1="0" y1={height} x2={width} y2={height} css={xAxisStyle} />
        <motion.polyline
          css={polylineStyle}
          initial={{ points: initialChartPolylineData }}
          animate={{ points: chartPolylineData }}
        />
        {chartDotsData.map((dot) => (
          <g key={dot.day}>
            <motion.text
              x={dot.x}
              y={dot.y - 10}
              css={dotLabelStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {formatNumber(dot.rate)}명
            </motion.text>
            <motion.line
              x1={dot.x}
              y1={height}
              x2={dot.x}
              css={pointLineStyle}
              initial={{ y2: 100 }}
              animate={{ y2: dot.y }}
            />
            <motion.circle
              cx={dot.x}
              r="5"
              css={dotStyle}
              initial={{ cy: 100 }}
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
