export const fetchAssets = async () => {
  const url = `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false`;

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
