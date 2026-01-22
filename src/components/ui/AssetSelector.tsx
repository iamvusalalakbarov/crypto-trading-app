import Image from "next/image";
import { Check, ChevronDown, Coins } from "lucide-react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  Portal,
} from "@headlessui/react";
import clsx from "clsx";
import { Asset } from "@/lib/types";

interface AssetSelectorProps {
  selectedAsset: Asset;
  assets: Asset[];
  onSelect: (asset: Asset) => void;
  disabled?: boolean;
}

export const AssetSelector = ({
  selectedAsset,
  assets,
  onSelect,
  disabled = false,
}: AssetSelectorProps) => (
  <Menu as="div" className="relative shrink-0">
    <MenuButton
      disabled={disabled}
      className="group flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 py-1.5 px-3 rounded-xl transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <Image
          src={selectedAsset.image}
          alt={selectedAsset.symbol}
          width={18}
          height={18}
          className="rounded-full"
        />
        <span className="font-bold text-xs text-white uppercase">
          {selectedAsset.symbol}
        </span>
      </div>
      <ChevronDown
        size={14}
        className="text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0"
      />
    </MenuButton>

    <Portal>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor={{ to: "bottom end", gap: 8 }}
          className="w-64 !max-h-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-[999] overflow-hidden flex flex-col focus:outline-none"
        >
          <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
            <Coins size={14} className="text-cyan-500" />
            <span className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">
              Select Asset
            </span>
          </div>
          <div className="overflow-y-auto custom-scrollbar">
            {assets.map((asset) => (
              <MenuItem key={asset.id}>
                {({ focus }) => (
                  <button
                    type="button"
                    onClick={() => onSelect(asset)}
                    className={clsx(
                      "w-full flex items-center justify-between px-4 py-3 transition-colors border-b border-slate-800/50 last:border-0 cursor-pointer",
                      focus ? "bg-slate-800" : "",
                      selectedAsset.id === asset.id && "bg-cyan-500/5"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={asset.image}
                        alt={asset.symbol}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <div className="text-left">
                        <p className="text-xs font-bold text-white uppercase">
                          {asset.symbol}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {asset.name}
                        </p>
                      </div>
                    </div>
                    {selectedAsset.id === asset.id && (
                      <Check size={14} className="text-cyan-400" />
                    )}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Portal>
  </Menu>
);
