import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export interface RevenuePoint {
  date: string;
  revenue: number;
}

interface RevenueChartProps {
  data: RevenuePoint[];
}

const RevenueChart = ({ data }: RevenueChartProps) => (
  <div className="h-72 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="date" hide />
        <YAxis hide />
        <Tooltip cursor={{ stroke: '#9145FE', strokeWidth: 2 }} />
        <Line type="monotone" dataKey="revenue" stroke="#9145FE" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;
