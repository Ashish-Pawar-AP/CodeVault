import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">CodeVault</h1>

      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/snippets" className="hover:text-gray-300">Snippets</Link>
        <Link to="/snippets/new" className="hover:text-gray-300">New Snippet</Link>
        <Link to="/collections" className="hover:text-gray-300">Collections</Link>
        <Link to="/modules" className="hover:text-gray-300">Modules</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
