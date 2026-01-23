import { Asset, SortOrder } from "@/lib/types";

export const fetchAssets = async (order: SortOrder): Promise<Asset[]> => {
  const apiOrder = `id_${order}`;
  const url = `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=${apiOrder}&per_page=100&sparkline=false&category=layer-1`;

  const response = await fetch(url, {
    headers: {
      "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO_API_KEY || "",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
