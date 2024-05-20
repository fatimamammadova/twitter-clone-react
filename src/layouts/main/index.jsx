import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Rightbar } from "./rightbar";

export const MainLayout = () => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <div className="flex-1 max-w-[600px] border-x border-[#2f3336]">
            <Outlet />
        </div>
        <Rightbar/>
      </main>
    </div>
  );
};
