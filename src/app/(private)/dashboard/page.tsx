import { useUserSessionStore } from "@/store/userSession";

export default function Dashboard() {
  const { userSession } = useUserSessionStore();

  if (!userSession) {
    return;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      <div>
        <p className="text-white">Welcome back, {userSession.name}!</p>
        <p className="text-white">Your email: {userSession.email}</p>
      </div>
    </div>
  );
}
