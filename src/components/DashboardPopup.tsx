import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import RevenueChart, { RevenuePoint } from './RevenueChart';

interface DashboardPopupProps {
  children: ReactNode;
  data: RevenuePoint[];
}

const DashboardPopup = ({ children, data }: DashboardPopupProps) => {
  const total = data.reduce((acc, curr) => acc + curr.revenue, 0);
  const streams = data.length;
  const hours = streams * 3;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-gray-900 text-white">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Revenue - Last 30 Days
        </h3>
        <RevenueChart data={data} />
        <div className="mt-4 text-center text-sm space-y-1">
          <div>
            Total earned:{' '}
            <span className="text-twitch font-semibold">
              {'$' + total.toLocaleString()}
            </span>
          </div>
          <div>Streams: {streams} • Hours: {hours}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardPopup;
