import { useQuery } from "@tanstack/react-query";
import { fetchAssets } from "@/lib/api";
import { SortOrder } from "@/lib/types";

export const useAssets = (nameOrder: SortOrder = "asc") => {
  return useQuery({
    queryKey: ["assets", nameOrder],
    queryFn: () => fetchAssets(nameOrder),
    staleTime: 1000 * 60 * 5,
  });
};
