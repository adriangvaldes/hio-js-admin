import { LayoutDashboard, LogOut, LucideIcon, Settings, User } from "lucide-react";

export type MenuButtonType = "dashboard" | "profile" | "settings" | "logout";

// 2. Define the configuration object for each button type
export interface MenuButtonConfig {
  label: string;
  icon: LucideIcon;
  action: () => void; // The specific function this button should call
}

export const menuConfig: Record<MenuButtonType, MenuButtonConfig> = {
  dashboard: {
    label: "Dashboard",
    icon: LayoutDashboard,
    action: goToDashboard,
  },
  profile: {
    label: "Profile",
    icon: User,
    action: goToProfile,
  },
  settings: {
    label: "Settings",
    icon: Settings,
    action: goToSettings,
  },
  logout: {
    label: "Log Out",
    icon: LogOut,
    action: handleLogout,
  },
};
