import { Asset, SortKey, SortOrder } from "@/lib/types";

export const getSortedAssets = (
  assets: Asset[] | undefined,
  key: SortKey,
  order: SortOrder
): Asset[] => {
  if (!assets) return [];

  const mod = order === "asc" ? 1 : -1;

  return [...assets].sort((a, b) => {
    if (key === "name") return a.name.localeCompare(b.name) * mod;
    return (a.current_price - b.current_price) * mod;
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

  return isSwapped
    ? result.toFixed(6)
    : result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
};
