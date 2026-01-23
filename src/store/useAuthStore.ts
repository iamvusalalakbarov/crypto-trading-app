import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";

interface AuthState {
  isLoggedIn: boolean;
  userEmail: string | null;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userEmail: null,
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
      login: (email) => {
        Cookies.set("isLoggedIn", "true", { expires: 7 });
        set({ isLoggedIn: true, userEmail: email });
      },
      logout: () => {
        Cookies.remove("isLoggedIn");
        set({ isLoggedIn: false, userEmail: null });
      },
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
