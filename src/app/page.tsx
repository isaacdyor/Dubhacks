import { DashboardClient } from "@/features/dashboard";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Wordware API Demo</h1>
      <DashboardClient />
    </div>
  );
}
