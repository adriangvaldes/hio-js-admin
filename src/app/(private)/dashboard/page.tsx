import { SideMenu } from "./components/sideMenu";

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-row gap-2 pt-2 pb-2">
      <SideMenu />
      <div className="grow rounded-4xl bg-slate-200 p-5">Teste</div>
      <div className="min-w-3xs rounded-4xl bg-slate-500 p-5">Teste</div>
    </div>
  );
}
