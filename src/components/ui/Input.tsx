import { InputHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Input as HeadlessInput, Field, Label } from "@headlessui/react";
import { Typography } from "./Typography";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const Input = ({
  label,
  errorMessage,
  className,
  ...props
}: InputProps) => {
  return (
    <Field className="flex flex-col gap-1.5 w-full">
      {label && (
        <Label>
          <Typography variant="label" as="span" className="ml-1 cursor-pointer">
            {label}
          </Typography>
        </Label>
      )}

      <div className="relative">
        <HeadlessInput
          {...props}
          className={clsx(
            "w-full bg-slate-800 text-white rounded-xl p-3.5 text-sm border transition-all duration-200",
            "placeholder:text-slate-500 focus:outline-none focus:ring-2",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            errorMessage
              ? "border-rose-500/50 focus:ring-rose-500/20 focus:border-rose-500"
              : "border-slate-700 focus:ring-cyan-500/20 focus:border-cyan-500",
            className
          )}
        />
      </div>

      <div className="min-h-[20px] ml-1">
        {errorMessage && (
          <Typography
            variant="caption"
            as="span"
            className="!text-rose-400 font-medium animate-in fade-in slide-in-from-top-1"
          >
            {errorMessage}
          </Typography>
        )}
      </div>
    </Field>
  );
};
