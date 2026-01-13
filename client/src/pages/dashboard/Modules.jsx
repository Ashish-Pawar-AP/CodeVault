import { useEffect, useState } from "react";
import { getModules, createModule, deleteModule } from "../../api/module.api";
import { useNavigate } from "react-router-dom";

const Modules = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchModules = async () => {
    const res = await getModules();
    setModules(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchModules();
  }, []);

  const handleCreate = async () => {
    if (!name.trim()) {
      setError("Module name is required");
      return;
    }

    await createModule({ name });
    setName("");
    setError("");
    setShowModal(false);
    fetchModules();
  };

  const handleDelete = async (id) => {
    await deleteModule(id);
    fetchModules();
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-slate-500">Loading modules...</div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Modules</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
        >
          + New Module
        </button>
      </div>

      {/* EMPTY STATE */}
      {modules.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <h2 className="text-lg font-semibold text-slate-700">
            No modules yet
          </h2>
          <p className="text-sm text-slate-500 mt-1 mb-4">
            Group snippets into feature-based modules
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Create your first module
          </button>
        </div>
      ) : (
        /* MODULE LIST */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div
              key={m._id}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-slate-800">{m.name}</h3>

                <p className="text-xs text-slate-500 mt-1">
                  Snippets inside: {m.snippetIds?.length || 0}
                </p>

                <button
                  onClick={() => navigate(`/modules/${m._id}`)}
                  className="mt-4 text-sm text-indigo-600 hover:underline"
                >
                  Manage snippets →
                </button>
              </div>
              <button
                onClick={() => handleDelete(m._id)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CREATE MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Create Module
            </h2>

            <input
              type="text"
              placeholder="Module name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />

            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  setName("");
                  setError("");
                }}
                className="px-4 py-2 text-slate-600 hover:text-slate-800"
              >
                Cancel
              </button>

              <button
                onClick={handleCreate}
                className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modules;
