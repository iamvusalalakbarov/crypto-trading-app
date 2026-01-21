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
