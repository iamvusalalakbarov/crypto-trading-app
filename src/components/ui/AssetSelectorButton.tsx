import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { MenuButton } from "@headlessui/react";
import { Asset } from "@/lib/types";

export interface AssetSelectorButtonProps {
  asset: Asset;
}

export const AssetSelectorButton = ({ asset }: AssetSelectorButtonProps) => (
  <MenuButton className="group flex items-center gap-2 bg-slate-900 border py-1.5 px-3 rounded-xl transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
    <div className="flex items-center gap-2">
      <Image
        src={asset.image}
        alt={asset.symbol}
        width={18}
        height={18}
        className="rounded-full"
      />
      <span className="font-bold text-xs text-white uppercase">
        {asset.symbol}
      </span>
    </div>
    <ChevronDown
      size={14}
      className="text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0"
    />
  </MenuButton>
);
