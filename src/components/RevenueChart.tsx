import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import type { TooltipProps } from 'recharts';
import type { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

export interface RevenuePoint {
  date: string;
  revenue: number;
}

interface RevenueChartProps {
  data: RevenuePoint[];
}

const CustomTooltip = (
  { active, payload, label }: TooltipProps<ValueType, NameType>
) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md bg-gray-800/80 px-3 py-2 text-xs text-white shadow-lg backdrop-blur-sm">
        <p>{label}</p>
        <p className="font-semibold text-twitch">{payload[0].value} streams</p>
      </div>
    );
  }
  return null;
};

const RevenueChart = ({ data }: RevenueChartProps) => (
  <div className="h-72 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="date" hide />
        <YAxis hide />
        <Tooltip
          cursor={{ stroke: '#9145FE', strokeWidth: 2 }}
          content={<CustomTooltip />}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#9145FE"
          strokeWidth={2}
          dot={{ r: 4, stroke: '#9145FE', strokeWidth: 2, fill: '#9145FE' }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;
