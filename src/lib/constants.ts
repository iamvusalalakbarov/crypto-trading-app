import { NavLink } from "@/lib/types";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Trade",
    href: "/trade",
  },
] as const;

export const ASSETS_PER_PAGE = 10;
