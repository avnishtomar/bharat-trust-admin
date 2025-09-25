import { Outlet, Link } from "@tanstack/react-router";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-4">
          <Link
            to="/dashboard"
            className="block py-2 px-4 hover:bg-blue-700"
            activeProps={{ className: "bg-blue-800" }}
          >
            Overview
          </Link>
          <Link
            to="/dashboard/profile"
            className="block py-2 px-4 hover:bg-blue-700"
            activeProps={{ className: "bg-blue-800" }}
          >
            Profile
          </Link>
          <Link
            to="/dashboard/settings"
            className="block py-2 px-4 hover:bg-blue-700"
            activeProps={{ className: "bg-blue-800" }}
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
