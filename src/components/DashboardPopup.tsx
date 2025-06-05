import { ReactNode, useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import RevenueChart, { RevenuePoint } from './RevenueChart';

interface StreamerStats {
  moneyEarned: number;
  increasePercent: number;
}

interface DashboardPopupProps {
  children: ReactNode;
  data: RevenuePoint[];
  stats: StreamerStats;
}

const DashboardPopup = ({ children, data, stats }: DashboardPopupProps) => {
  const streams = data.reduce((acc, curr) => acc + curr.revenue, 0);
  const hours = streams * 3;

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
        className="bg-gray-900 text-white border border-twitch/40 shadow-[0_0_30px_#9145FE] animate-glow"
      >
        <h3 className="text-lg font-semibold mb-4 text-center">
          Streams - Last 30 Days
        </h3>
        <RevenueChart data={data} />
        <div className="mt-4 text-center text-sm space-y-1">
          <div>
            Earned with us:{' '}
            <span className="text-twitch font-semibold">
              {'$' + stats.moneyEarned.toLocaleString()}
            </span>
          </div>
          <div className="text-green-400">
            +{stats.increasePercent}% revenue
          </div>
          <div>Streams this month: {streams}</div>
          <div className="font-semibold text-twitch">Hours streamed: {hours}h</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardPopup;
