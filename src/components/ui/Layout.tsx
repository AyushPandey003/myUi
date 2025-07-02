import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile header */}
      <div className="sticky top-0 z-50 flex items-center gap-x-4 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700 px-4 py-2 lg:hidden">
        <button
          type="button"
          className="text-slate-300 hover:text-white"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-x-2">
          <div className="h-6 w-6 rounded bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
            3D
          </div>
          <h1 className="text-lg font-bold text-white">3D UI Spark</h1>
        </div>
      </div>

      <div className="flex h-screen lg:h-auto">
        {/* Sidebar */}
        <div
          className={`
          fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:static lg:transform-none
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
