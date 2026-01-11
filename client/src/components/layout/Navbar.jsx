import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
      <span>Welcome, {user?.name}</span>
      <button
        onClick={logout}
        className="bg-red-500 px-3 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
