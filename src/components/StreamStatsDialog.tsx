import { ReactNode } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RevenueChart, { RevenuePoint } from './RevenueChart';

interface StreamStatsDialogProps {
  trigger: ReactNode;
  data: RevenuePoint[];
  totalStreams: number;
  totalHours: number;
  totalRevenue: number;
}

const StreamStatsDialog = ({
  trigger,
  data,
  totalStreams,
  totalHours,
  totalRevenue
}: StreamStatsDialogProps) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-xl">
      <DialogHeader>
        <DialogTitle>Ad Revenue by day - 30 days</DialogTitle>
      </DialogHeader>
      <RevenueChart data={data} />
      <div className="grid grid-cols-3 gap-4 mt-4 text-center">
        <div>
          <div className="text-gray-400 text-sm">Streams</div>
          <div className="text-xl font-bold">{totalStreams}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm">Hours</div>
          <div className="text-xl font-bold">{totalHours}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm">Revenue</div>
          <div className="text-xl font-bold text-twitch">${totalRevenue.toLocaleString()}</div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default StreamStatsDialog;
