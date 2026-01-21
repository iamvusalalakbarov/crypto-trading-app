"use client";

import { useState, useMemo } from "react";
import { useAssets } from "@/hooks/useAssets";
import { AssetRow } from "@/components/AssetRow";
import { Spinner } from "@/components/ui/Spinner";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { AssetsTableHead } from "@/components/AssetsTableHead";
import { SortKey, SortOrder } from "@/lib/types";
import { getSortedAssets } from "@/lib/utils";
import { ASSETS_PER_PAGE } from "@/lib/constants";

export const AssetsTable = () => {
  const [displayCount, setDisplayCount] = useState(ASSETS_PER_PAGE);
  const [sortKey, setSortKey] = useState<SortKey>("price");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const { data, isLoading, error, refetch } = useAssets();

  const sortedAssets = useMemo(
    () => getSortedAssets(data, sortKey, sortOrder),
    [data, sortKey, sortOrder]
  );

  const handleSort = (key: SortKey) => {
    const newOrder = sortKey === key && sortOrder === "desc" ? "asc" : "desc";

    setSortOrder(newOrder);
    setSortKey(key);
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + ASSETS_PER_PAGE);
  };

  if (isLoading)
    return (
      <div className="py-20 flex justify-center">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="py-20 flex flex-col items-center gap-4">
        <Typography className="!text-rose-500 font-medium">
          Failed to load assets.
        </Typography>
        <Button
          variant="outline"
          onClick={() => refetch()}
          className="border-slate-800 text-slate-300 hover:text-white"
        >
          Try Again
        </Button>
      </div>
    );

  return (
    <div className="w-full space-y-6">
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
        <table className="w-full text-left border-separate border-spacing-0 table-fixed">
          <thead>
            <tr className="bg-slate-900/80">
              <AssetsTableHead
                label="Asset"
                active={sortKey === "name"}
                order={sortOrder}
                width="w-[50%]"
                onClick={() => handleSort("name")}
              />
              <AssetsTableHead
                label="Price"
                active={sortKey === "price"}
                order={sortOrder}
                width="w-[30%]"
                onClick={() => handleSort("price")}
              />
              <th className="p-4 border-b border-slate-800" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {sortedAssets.slice(0, displayCount).map((asset) => (
              <AssetRow key={asset.id} asset={asset} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center pb-10">
        {displayCount < sortedAssets.length && (
          <Button
            variant="outline"
            className="px-8 border-slate-800 hover:bg-slate-800/50"
            onClick={handleShowMore}
          >
            <Typography>Show More</Typography>
          </Button>
        )}
      </div>
    </div>
  );
};
