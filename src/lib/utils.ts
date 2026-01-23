import { Asset, SortKey, SortOrder } from "@/lib/types";

export const getSortedAssets = (
  assets: Asset[] | undefined,
  key: SortKey,
  order: SortOrder
): Asset[] => {
  if (!assets) return [];

  if (key === "name") {
    return assets;
  }

  const mod = order === "asc" ? 1 : -1;

  return [...assets].sort((a, b) => {
    return (a.current_price - b.current_price) * mod;
  });
};

export const formatCurrency = (value: number | null | undefined): string => {
  return (value ?? 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const getExchangeValue = (
  amount: string,
  price: number,
  isSwapped: boolean
): string => {
  const num = Number.parseFloat(amount);

  if (!amount || Number.isNaN(num) || price === 0) {
    return "";
  }

  const result = isSwapped ? num / price : num * price;

  return isSwapped ? result.toFixed(6) : formatCurrency(result);
};

export const getTradeInputBlockLabel = (isFiat: boolean) =>
  isFiat ? "Fiat amount" : "Crypto amount";
