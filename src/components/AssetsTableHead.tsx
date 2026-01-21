import { SortIndicator } from "@/components/ui/SortIndicator";
import { SortOrder } from "@/lib/types";

interface AssetsTableHeadProps {
  label: string;
  active: boolean;
  order: SortOrder;
  onClick: () => void;
  width?: string;
}

export const AssetsTableHead = ({
  label,
  active,
  order,
  onClick,
  width,
}: AssetsTableHeadProps) => (
  <th
    className={`p-4 cursor-pointer hover:bg-slate-800/50 transition-colors border-b border-slate-800 ${width}`}
    onClick={onClick}
  >
    <div className="flex items-center gap-2 text-slate-400 uppercase text-xs font-bold tracking-wider">
      {label} <SortIndicator active={active} order={order} />
    </div>
  </th>
);
