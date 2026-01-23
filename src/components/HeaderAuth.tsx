"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { LoginModal } from "@/components/LoginModal";
import { useAuthStore } from "@/store/useAuthStore";

export const HeaderAuth = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [renderModal, setRenderModal] = useState(false);
  const { isLoggedIn, userEmail, logout, _hasHydrated } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();

    if (pathname.startsWith("/trade")) {
      router.replace("/");
    }
  };

  const openModal = () => {
    setRenderModal(true);
    setIsLoginOpen(true);
  };

  if (!_hasHydrated) return null;

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
        <Typography
          variant="caption"
          className="hidden sm:block text-slate-400"
        >
          {userEmail}
        </Typography>
        <Button variant="outline" onClick={handleLogout}>
          <Typography>Log out</Typography>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button onClick={openModal}>
        <Typography>Log in</Typography>
      </Button>
      {renderModal && (
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onExited={() => setRenderModal(false)}
        />
      )}
    </>
  );
};
