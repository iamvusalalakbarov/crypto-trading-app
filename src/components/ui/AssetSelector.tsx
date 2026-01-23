import { Fragment } from "react";
import { Menu, MenuItems, Transition } from "@headlessui/react";
import { Asset } from "@/lib/types";
import { AssetSelectorButton } from "./AssetSelectorButton";
import { AssetSelectorMenuHeader } from "./AssetSelectorMenuHeader";
import { AssetSelectorItem } from "./AssetSelectorItem";

interface AssetSelectorProps {
  selectedAsset: Asset;
  assets: Asset[];
  onSelect: (asset: Asset) => void;
}

export const AssetSelector = ({
  selectedAsset,
  assets,
  onSelect,
}: AssetSelectorProps) => (
  <Menu as="div" className="relative shrink-0">
    <AssetSelectorButton asset={selectedAsset} />

    <Transition
      as={Fragment}
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
        <AssetSelectorMenuHeader />
        <div className="overflow-y-auto custom-scrollbar">
          {assets.map((asset) => (
            <AssetSelectorItem
              key={asset.id}
              asset={asset}
              isSelected={selectedAsset.id === asset.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </MenuItems>
    </Transition>
  </Menu>
);
