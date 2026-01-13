import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const StatCard = ({ title, value }) => (
  <div className="bg-white border rounded-xl p-6 shadow-sm">
    <p className="text-sm text-slate-500">{title}</p>
    <p className="text-3xl font-bold text-slate-800">{value}</p>
  </div>
);

const DashboardHome = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/dashboard").then((res) => setData(res.data));
  }, []);

  if (!data) {
    return (
      <div className="text-center mt-20 text-slate-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Snippets" value={data.stats.snippets} />
        <StatCard title="Collections" value={data.stats.collections} />
        <StatCard title="Modules" value={data.stats.modules} />
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => navigate("/snippets/new")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            + New Snippet
          </button>
          <button
            onClick={() => navigate("/collections")}
            className="border px-4 py-2 rounded-lg text-sm"
          >
            New Collection
          </button>
          <button
            onClick={() => navigate("/modules")}
            className="border px-4 py-2 rounded-lg text-sm"
          >
            New Module
          </button>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-3">Recent Snippets</h2>
        {data.recentSnippets.map((s) => (
          <div key={s._id} className="text-sm text-slate-700">
            {s.title} · {s.language}
          </div>
        ))}
      </div>

      {/* MOST COPIED */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-3">Most Copied Snippets</h2>
        {data.topSnippets.map((s) => (
          <div key={s._id} className="flex justify-between text-sm">
            <span>{s.title}</span>
            <span className="text-slate-500">{s.copyCount} copies</span>
          </div>
        ))}
      </div>

      {/* CATEGORY BREAKDOWN */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-3">Snippets by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.categoryStats.map((c) => (
            <div key={c._id} className="border rounded-lg p-3 text-center">
              <p className="text-sm text-slate-500">{c._id || "Other"}</p>
              <p className="text-xl font-bold">{c.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
