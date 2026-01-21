"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Typography } from "@/components/ui/Typography";
import { NAV_LINKS } from "@/lib/constants";

export const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {NAV_LINKS.map((link) => (
        <Link key={link.id} href={link.href}>
          <Typography
            variant="body"
            as="span"
            className={clsx(
              "transition-colors ease-in-out",
              pathname !== link.href && "opacity-70 hover:opacity-100"
            )}
          >
            {link.name}
          </Typography>
        </Link>
      ))}
    </nav>
  );
};
