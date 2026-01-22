import { Lock } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

export const TradeAuthOverlay = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-[2px] transition-all">
      <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center max-w-xs animate-in fade-in zoom-in duration-300">
        <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4">
          <Lock className="text-cyan-400" size={24} />
        </div>
        <Typography className="text-white font-bold mb-1">
          Trading is Locked
        </Typography>
        <Typography variant="caption" className="text-slate-400 mb-6">
          Please log in to your account to start trading assets and view live
          estimates.
        </Typography>
      </div>
    </div>
  );
};
