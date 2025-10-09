import { useUserSessionStore } from "@/store/userSession";
import { Header } from "./components/header";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      <div>
        <Header />
      </div>
    </div>
  );
}
