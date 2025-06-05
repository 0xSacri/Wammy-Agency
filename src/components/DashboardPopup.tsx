import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import RevenueChart, { RevenuePoint } from './RevenueChart';

interface DashboardPopupProps {
  children: ReactNode;
  data: RevenuePoint[];
}

const DashboardPopup = ({ children, data }: DashboardPopupProps) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="bg-gray-900">
      <h3 className="text-lg font-semibold mb-4 text-center text-white">
        Revenue - Last 30 Days
      </h3>
      <RevenueChart data={data} />
    </DialogContent>
  </Dialog>
);

export default DashboardPopup;
