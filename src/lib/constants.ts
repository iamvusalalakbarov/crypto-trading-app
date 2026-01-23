import { NavLink } from "@/lib/types";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
    isProtected: false,
  },
  {
    id: 2,
    name: "Trade",
    href: "/trade",
    isProtected: true,
  },
] as const;

export const ASSETS_PER_PAGE = 10;
