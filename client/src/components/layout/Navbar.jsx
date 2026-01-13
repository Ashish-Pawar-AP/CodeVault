import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Welcome, <span className="text-indigo-600">{user?.name}</span>
        </h2>

        <button
          onClick={logout}
          className="bg-linear-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:opacity-90 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
