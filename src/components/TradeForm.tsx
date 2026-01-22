"use client";

import { useState, useMemo } from "react";
import { ArrowUpDown, Loader2 } from "lucide-react";
import { useAssets } from "@/hooks/useAssets";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/Button";
import { TradeAuthOverlay } from "@/components/TradeAuthOverlay";
import { TradeInputBlock } from "@/components/ui/TradeInputBlock";
import { TradeFormFooter } from "@/components/TradeFormFooter";
import { Asset } from "@/lib/types";
import { getExchangeValue } from "@/lib/utils";

export const TradeForm = () => {
  const { isLoggedIn } = useAuthStore();
  const { data: assets = [], isLoading } = useAssets();
  const [isSwapped, setIsSwapped] = useState(false);
  const [amount, setAmount] = useState<string>("");
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(() => {
    return assets.length > 0 ? assets[0] : null;
  });

  if (assets.length > 0 && !selectedAsset) {
    setSelectedAsset(assets[0]);
  }

  const derivedValue = useMemo(
    () =>
      getExchangeValue(amount, selectedAsset?.current_price || 0, isSwapped),
    [amount, selectedAsset, isSwapped]
  );

  const handleSwap = () => {
    if (!isLoggedIn) return;
    setAmount(derivedValue.replaceAll(",", ""));
    setIsSwapped(!isSwapped);
  };

  if (isLoading || !selectedAsset) {
    return (
      <div className="flex justify-center items-center p-12 bg-slate-900 border border-slate-800 rounded-3xl w-[600px] h-[425px] mx-auto">
        <Loader2 className="animate-spin text-cyan-500" />
      </div>
    );
  }

  return (
    <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl w-[600px] h-[425px] mx-auto overflow-hidden">
      {!isLoggedIn && <TradeAuthOverlay />}

      <div className="flex flex-col gap-6">
        <TradeInputBlock
          label={isSwapped ? "Fiat amount" : "Crypto amount"}
          amount={amount}
          onAmountChange={setAmount}
          isUSD={isSwapped}
          selectedAsset={selectedAsset}
          assets={assets}
          onAssetSelect={setSelectedAsset}
          isLoggedIn={isLoggedIn}
          variant="primary"
        />

        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            onClick={handleSwap}
            disabled={!isLoggedIn}
            className="bg-slate-900 border-[8px] border-slate-900 p-2.5 rounded-2xl hover:bg-slate-800 size-12 text-cyan-400 disabled:opacity-30 transition-transform active:scale-90"
          >
            <ArrowUpDown size={24} />
          </Button>
        </div>

        <TradeInputBlock
          label={isSwapped ? "Crypto amount" : "Fiat amount"}
          amount={derivedValue}
          isReadOnly
          isUSD={!isSwapped}
          selectedAsset={selectedAsset}
          assets={assets}
          onAssetSelect={setSelectedAsset}
          isLoggedIn={isLoggedIn}
          variant="secondary"
        />
      </div>

      <TradeFormFooter selectedAsset={selectedAsset} />
    </div>
  );
};
