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
      <div className="flex flex-1 lg:flex-col mt-16 lg:mt-28 h-full">
        <div className="flex-1 bg-white overflow-y-auto px-4 sm:px-8 lg:pr-16 2xl:pr-12">
          <HeaderProtected />
          {children}
        </div>
      </div>
    </main>
  );
}
