import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { colors, factoryIndexes, textForFabrics } from '../../../../constants';

import type { IBarChartData } from '../../../../models/types';

import styles from './BarChart.module.css';

interface IProps {
  data: IBarChartData[];
}

const BarChartHome: FC<IProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (factoryId: '1' | '2', e: IBarChartData) => {
    navigate(`/details/${factoryId}/${e.month}`);
  };

  return (
    <div className={styles.wrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthText" />
          <YAxis width={25} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={textForFabrics.factory_1}
            fill={colors.red}
            onClick={(e) => handleClick(factoryIndexes.A, e)}
          />
          <Bar
            dataKey={textForFabrics.factory_2}
            fill={colors.blue}
            onClick={(e) => handleClick(factoryIndexes.B, e)}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartHome;
