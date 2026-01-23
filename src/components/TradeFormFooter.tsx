import { Typography } from "@/components/ui/Typography";
import { Asset } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface TradeFormFooterProps {
  selectedAsset: Asset;
}

export const TradeFormFooter = ({ selectedAsset }: TradeFormFooterProps) => {
  return (
    <div className="mt-6 pt-5 px-2 flex justify-between items-center border-t border-slate-800/50">
      <div className="flex items-center gap-2">
        <div className="size-1.5 rounded-full bg-cyan-500 animate-pulse" />
        <Typography
          variant="caption"
          className="text-slate-500 text-[10px] font-bold uppercase tracking-wider"
        >
          Live Market Price
        </Typography>
      </div>
      <Typography
        variant="caption"
        className="text-cyan-400 font-mono font-bold text-xs"
      >
        1 {selectedAsset.symbol.toUpperCase()} = $
        {formatCurrency(selectedAsset.current_price)}
      </Typography>
    </div>
  );
};
