"use client";

import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Typography } from "./ui/Typography";
import { useAuthStore } from "@/store/useAuthStore";
import { LoginCredentials, LoginFormErrors } from "@/lib/types";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialState: LoginCredentials = {
  email: "",
  password: "",
};

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [form, setForm] = useState<LoginCredentials>(initialState);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const login = useAuthStore((state) => state.login);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm(initialState);
      setErrors({});
    }, 200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: LoginFormErrors = {};

    if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    login(form.email);
    handleClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            aria-hidden="true"
          />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-900 p-8 text-left align-middle shadow-2xl border border-slate-800 transition-all">
                <DialogTitle as={Fragment}>
                  <Typography variant="h2" as="h3">
                    Log In
                  </Typography>
                </DialogTitle>

                <div className="mt-2">
                  <Typography variant="caption">
                    Enter your credentials to access the trading features.
                  </Typography>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-4"
                >
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="example@mail.com"
                    value={form.email}
                    onChange={handleChange}
                    errorMessage={errors.email}
                    required
                  />

                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    errorMessage={errors.password}
                    required
                  />

                  <div className="mt-4 flex flex-col gap-3">
                    <Button type="submit" variant="primary" fullWidth>
                      <Typography
                        variant="body"
                        as="span"
                        className="font-semibold text-white"
                      >
                        Login
                      </Typography>
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      fullWidth
                      onClick={handleClose}
                    >
                      <Typography
                        variant="body"
                        as="span"
                        className="text-slate-400"
                      >
                        Cancel
                      </Typography>
                    </Button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
