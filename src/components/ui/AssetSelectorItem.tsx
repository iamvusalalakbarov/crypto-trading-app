import Image from "next/image";
import { Check } from "lucide-react";
import { MenuItem } from "@headlessui/react";
import clsx from "clsx";
import { Asset } from "@/lib/types";

export interface AssetSelectorItemProps {
  asset: Asset;
  isSelected: boolean;
  onSelect: (asset: Asset) => void;
}

export const AssetSelectorItem = ({
  asset,
  isSelected,
  onSelect,
}: AssetSelectorItemProps) => (
  <MenuItem>
    {({ focus }) => (
      <button
        type="button"
        onClick={() => onSelect(asset)}
        className={clsx(
          "w-full flex items-center justify-between px-4 py-3 transition-colors border-b border-slate-800/50 last:border-0 cursor-pointer",
          focus ? "bg-slate-800" : "",
          isSelected && "bg-cyan-500/5"
        )}
      >
        <div className="flex items-center gap-3">
          <Image
            src={asset.image}
            alt={asset.symbol}
            width={24}
            height={24}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="text-xs font-bold text-white uppercase">
              {asset.symbol}
            </p>
            <p className="text-[10px] text-slate-500">{asset.name}</p>
          </div>
        </div>
        {isSelected && <Check size={14} className="text-cyan-400" />}
      </button>
    )}
  </MenuItem>
);
