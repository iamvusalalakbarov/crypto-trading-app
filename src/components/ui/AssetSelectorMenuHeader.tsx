import { Coins } from "lucide-react";

export const AssetSelectorMenuHeader = () => (
  <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
    <Coins size={14} className="text-cyan-500" />
    <span className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">
      Select Asset
    </span>
  </div>
);
