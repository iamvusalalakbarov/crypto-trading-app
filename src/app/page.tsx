import { AssetsTable } from "@/components/AssetsTable";
import { Typography } from "@/components/ui/Typography";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <Typography variant="h1">Market Overview</Typography>
        <Typography>
          Track real-time prices, market caps, and trends for the top digital
          assets.
        </Typography>
      </div>

      <AssetsTable />
    </div>
  );
}
