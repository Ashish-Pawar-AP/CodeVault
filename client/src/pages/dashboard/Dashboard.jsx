import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

const Dashboard = ({ children }) => {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
