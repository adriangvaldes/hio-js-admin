import { UserSession } from "@/types/userSession";
import { type } from "os";
import { create } from "zustand";

type UseUserSessionStore = {
  userSession: UserSession | null;
  setUserSession: (session: UserSession) => void;
  clearUserSession: () => void;
};
export const useUserSessionStore = create<UseUserSessionStore>((set) => ({
  userSession: null,
  setUserSession: (session: UserSession) => set({ userSession: session }),
  clearUserSession: () => set({ userSession: null }),
}));
