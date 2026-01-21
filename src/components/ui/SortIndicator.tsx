import { clsx } from "clsx";
import { SortOrder } from "@/lib/types";
import { ChevronUp } from "lucide-react";

interface SortIndicatorProps {
  active: boolean;
  order: SortOrder;
}

export const SortIndicator = ({ active, order }: SortIndicatorProps) => {
  return (
    <div
      className={clsx(
        "transition-all duration-300 ease-in-out",
        order === "desc" ? "rotate-180" : "rotate-0",
        !active && "opacity-0"
      )}
      aria-hidden="true"
    >
      <ChevronUp className="size-4" />
    </div>
  );
};
