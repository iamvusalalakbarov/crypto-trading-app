"use client";

import { useState } from "react";
import { ArrowUpDown, Loader2 } from "lucide-react";
import { useAssets } from "@/hooks/useAssets";
import { Button } from "@/components/ui/Button";
import { TradeInputBlock } from "@/components/ui/TradeInputBlock";
import { TradeFormFooter } from "@/components/TradeFormFooter";
import { Asset } from "@/lib/types";
import { getExchangeValue, getTradeInputBlockLabel } from "@/lib/utils";

export const TradeForm = () => {
  const { data: assets = [], isLoading } = useAssets();
  const [isSwapped, setIsSwapped] = useState(false);
  const [amount, setAmount] = useState<string>("");
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(() => {
    return assets.length > 0 ? assets[0] : null;
  });

  const activeAsset = selectedAsset || assets[0];

  const derivedValue = getExchangeValue(
    amount,
    activeAsset?.current_price || 0,
    isSwapped
  );

  const handleSwap = () => {
    setAmount(derivedValue.replaceAll(",", ""));
    setIsSwapped(!isSwapped);
  };

  if (isLoading || !activeAsset) {
    return (
      <div className="flex justify-center items-center p-12 bg-slate-900 border border-slate-800 rounded-3xl w-[600px] h-[425px] mx-auto">
        <Loader2 className="animate-spin text-cyan-500" />
      </div>
    );
  }

  return (
    <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl w-[600px] h-[425px] mx-auto overflow-hidden">
      <div className="flex flex-col gap-6">
        <TradeInputBlock
          label={getTradeInputBlockLabel(isSwapped)}
          amount={amount}
          onAmountChange={setAmount}
          isUSD={isSwapped}
          selectedAsset={activeAsset}
          assets={assets}
          onAssetSelect={setSelectedAsset}
          variant="primary"
        />

        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            onClick={handleSwap}
            className="bg-slate-900 border-[8px] border-slate-900 p-2.5 rounded-2xl hover:bg-slate-800 size-12 text-cyan-400 disabled:opacity-30 transition-transform active:scale-90"
          >
            <ArrowUpDown size={24} />
          </Button>
        </div>

        <TradeInputBlock
          label={getTradeInputBlockLabel(!isSwapped)}
          amount={derivedValue}
          isReadOnly
          isUSD={!isSwapped}
          selectedAsset={activeAsset}
          assets={assets}
          onAssetSelect={setSelectedAsset}
          variant="secondary"
        />
      </div>

      <TradeFormFooter selectedAsset={activeAsset} />
    </div>
  );
};
