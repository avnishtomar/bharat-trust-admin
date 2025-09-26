import { Outlet, Link } from "@tanstack/react-router";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <Link to="/" className="text-xl font-bold">
            My App
          </Link>
          <div className="float-right space-x-4">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
