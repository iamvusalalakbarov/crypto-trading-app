"use client";

import { useState, useLayoutEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { LoginModal } from "@/components/LoginModal";
import { useAuthStore } from "@/store/useAuthStore";

export const HeaderAuth = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { isLoggedIn, userEmail, logout } = useAuthStore();

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
        <Typography
          variant="caption"
          className="hidden sm:block text-slate-400"
        >
          {userEmail}
        </Typography>
        <Button variant="outline" onClick={() => logout()}>
          <Typography>Log out</Typography>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => setIsLoginOpen(true)}>
        <Typography>Log in</Typography>
      </Button>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};
