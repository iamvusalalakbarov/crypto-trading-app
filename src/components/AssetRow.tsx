import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { AssetActions } from "./AssetActions";
import { Asset } from "@/lib/types";

interface AssetRowProps {
  asset: Asset;
}

export const AssetRow = ({ asset }: AssetRowProps) => {
  return (
    <tr className="hover:bg-slate-800/30 transition-colors group">
      <td className="p-4 border-b border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 overflow-hidden">
            <Image src={asset.image} alt={asset.name} fill className="p-1.5" />
          </div>
          <div className="truncate">
            <Typography variant="body" className="font-semibold text-white">
              {asset.name}
            </Typography>
            <Typography variant="caption" className="uppercase text-slate-500">
              {asset.symbol}
            </Typography>
          </div>
        </div>
      </td>

      <td className="p-4 border-b border-slate-800/50">
        <Typography variant="body" className="font-mono text-slate-200">
          $
          {(asset.current_price ?? 0).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      </td>

      <td className="p-4 text-right border-b border-slate-800/50">
        <AssetActions asset={asset} />
      </td>
    </tr>
  );
};
