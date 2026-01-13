import { NavLink } from "react-router-dom";
import {
  Code2,
  LayoutDashboard,
  Folder,
  Layers,
  PlusSquare,
} from "lucide-react";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition";

  return (
    <aside className="w-64 min-h-screen bg-linear-to-b from-slate-900 to-slate-800 text-slate-200 p-4">
      {/* LOGO */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <Code2 className="text-indigo-400" />
        <span className="text-xl font-bold text-white">CodeVault</span>
      </div>

      {/* NAV */}
      <nav className="space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-slate-700 text-white" : "hover:bg-slate-700/60"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/snippets"
          end
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-slate-700 text-white" : "hover:bg-slate-700/60"
            }`
          }
        >
          <Code2 size={18} />
          Snippets
        </NavLink>

        <NavLink
          to="/snippets/new"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-slate-700 text-white" : "hover:bg-slate-700/60"
            }`
          }
        >
          <PlusSquare size={18} />
          New Snippet
        </NavLink>

        <NavLink
          to="/collections"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-slate-700 text-white" : "hover:bg-slate-700/60"
            }`
          }
        >
          <Folder size={18} />
          Collections
        </NavLink>

        <NavLink
          to="/modules"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-slate-700 text-white" : "hover:bg-slate-700/60"
            }`
          }
        >
          <Layers size={18} />
          Modules
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
