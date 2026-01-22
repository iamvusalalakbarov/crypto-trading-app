import clsx from "clsx";
import { Asset, TradeInputBlockVariant } from "@/lib/types";
import { Typography } from "@/components/ui/Typography";
import { Input } from "@/components/ui/Input";
import { AssetSelector } from "@/components/ui/AssetSelector";

interface TradeInputBlockProps {
  label: string;
  amount: string;
  isUSD: boolean;
  selectedAsset: Asset;
  assets: Asset[];
  isLoggedIn: boolean;
  onAssetSelect: (asset: Asset) => void;
  isReadOnly?: boolean;
  variant?: TradeInputBlockVariant;
  onAmountChange?: (value: string) => void;
}

export const TradeInputBlock = ({
  label,
  amount,
  isUSD,
  selectedAsset,
  assets,
  isLoggedIn,
  onAssetSelect,
  isReadOnly,
  variant = "primary",
  onAmountChange,
}: TradeInputBlockProps) => (
  <div
    className={clsx(
      "px-5 py-3 rounded-2xl border transition-all relative",
      variant === "primary"
        ? "bg-slate-950 border-slate-800"
        : "bg-slate-950/50 border-slate-800/50",
      isLoggedIn && !isReadOnly ? "focus-within:border-cyan-500" : "opacity-50"
    )}
  >
    <Typography
      variant="caption"
      className="text-slate-500 uppercase text-[9px] font-bold tracking-widest block mb-1.5"
    >
      {label}
    </Typography>
    <div className="flex items-center">
      <Input
        type={isReadOnly ? "text" : "number"}
        placeholder="0.00"
        value={amount}
        onChange={(e) => onAmountChange?.(e.target.value)}
        readOnly={isReadOnly || !isLoggedIn}
        className={clsx(
          "bg-transparent text-2xl font-bold border-none !p-0 h-10 focus-visible:ring-0 flex-1 pr-4",
          isReadOnly ? "text-slate-500 cursor-not-allowed" : "text-white"
        )}
      />
      <div className="shrink-0 absolute right-5 top-1/2 -translate-y-1/2">
        {isUSD ? (
          <span className="font-black text-slate-600 text-sm pr-2 tracking-tighter">
            USD
          </span>
        ) : (
          <AssetSelector
            selectedAsset={selectedAsset}
            assets={assets}
            onSelect={onAssetSelect}
            disabled={!isLoggedIn}
          />
        )}
      </div>
    </div>
  </div>
);
