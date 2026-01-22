import { useQuery } from "@tanstack/react-query";
import { fetchAssets } from "@/lib/api";

export const useAssets = () => {
  return useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
    staleTime: 1000 * 60,
  });
};
