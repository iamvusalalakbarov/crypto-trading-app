import { HeaderNav } from "./HeaderNav";
import { HeaderAuth } from "./HeaderAuth";

export const Header = () => {
  return (
    <header className="sticky top-0 h-20 bg-slate-950/80 backdrop-blur-md px-8 flex justify-between items-center z-50 border-b border-slate-800">
      <HeaderNav />
      <div className="flex items-center gap-4 min-w-[120px] justify-end">
        <HeaderAuth />
      </div>
    </header>
  );
};
