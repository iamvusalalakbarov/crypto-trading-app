"use client";

import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisVertical } from "lucide-react";
import { clsx } from "clsx";
import { Asset } from "@/lib/types";

interface AssetActionsProps {
  asset: Asset;
}

export const AssetActions = ({ asset }: AssetActionsProps) => {
  const actions = [
    {
      label: `Buy ${asset.symbol.toUpperCase()}`,
      color: "hover:bg-cyan-600",
    },
    { label: `Sell ${asset.symbol.toUpperCase()}`, color: "hover:bg-rose-600" },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
        <EllipsisVertical className="size-5" />
      </MenuButton>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-xl bg-slate-900 border border-slate-800 shadow-2xl z-50 focus:outline-none overflow-hidden p-1">
          {actions.map((action) => (
            <MenuItem key={action.label}>
              {({ focus }) => (
                <Link
                  href="#"
                  className={clsx(
                    "flex w-full items-center px-3 py-2 text-sm rounded-lg transition-colors font-medium text-slate-300",
                    focus && `${action.color} text-white`
                  )}
                >
                  {action.label}
                </Link>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};
