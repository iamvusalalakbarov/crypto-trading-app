import React from "react";
import { clsx } from "clsx";
import { TypographyVariant } from "@/lib/types";

interface TypographyProps<T extends React.ElementType> {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  as?: T;
}

export const Typography = <T extends React.ElementType = "p">({
  variant = "body",
  children,
  className,
  as,
  ...props
}: TypographyProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Tag = as ?? (variant.startsWith("h") ? variant : "p");

  const variants: Record<TypographyVariant, string> = {
    h1: "text-3xl font-bold text-white tracking-tight",
    h2: "text-2xl font-semibold text-white",
    h3: "text-xl font-medium text-white",
    body: "text-base text-slate-200 leading-relaxed",
    caption: "text-sm text-slate-400",
    label: "text-xs font-semibold uppercase tracking-wider text-slate-500",
  };

  return (
    <Tag className={clsx(variants[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
