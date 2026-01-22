import { clsx } from "clsx";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
  <div className={clsx("flex items-center justify-center", className)}>
    <div className="size-6 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-500" />
  </div>
);
