import { Outlet } from "@tanstack/react-router";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
