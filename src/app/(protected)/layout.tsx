import { Sidebar } from "@/components/Sidebar";
import { HeaderProtected } from "../../components/HeaderProtected";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 lg:flex-col mt-28 lg:mt-0 h-full">
        <HeaderProtected />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </main>
  );
}
