import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
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
        <p className="font-semibold text-twitch">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const RevenueChart = ({ data }: RevenueChartProps) => (
  <div className="h-72 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="date" hide />
        <YAxis hide />
        <Tooltip cursor={{ fill: 'rgba(145,69,254,0.1)' }} content={<CustomTooltip />} />
        <Bar dataKey="revenue" fill="#9145FE" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;
