import React from "react";
import { clsx } from "clsx";
import { Button as HeadlessButton } from "@headlessui/react";
import { ButtonVariant } from "@/lib/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-cyan-700 text-white border border-cyan-500/20 hover:bg-cyan-600 shadow-lg shadow-cyan-900/20",
    secondary:
      "bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 hover:border-slate-600",
    ghost:
      "bg-transparent text-slate-400 border border-transparent hover:text-white hover:bg-slate-800/50",
    outline:
      "bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500",
  };

  return (
    <HeadlessButton
      {...props}
      className={clsx(
        "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        variants[variant],
        fullWidth ? "w-full" : "w-fit",
        className
      )}
    >
      {children}
    </HeadlessButton>
  );
};
