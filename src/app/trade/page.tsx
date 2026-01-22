import { TradeForm } from "@/components/TradeForm";
import { Typography } from "@/components/ui/Typography";

export default function TradePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Typography variant="h1">Exchange</Typography>
        <Typography>Trade assets instantly at market price.</Typography>
      </div>

      <TradeForm />
    </div>
  );
}
