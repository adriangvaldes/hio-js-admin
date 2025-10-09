interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  sessionToken: string;
}
