import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const ModuleDetails = () => {
  const { id } = useParams();

  const [module, setModule] = useState(null);
  const [snippets, setSnippets] = useState([]);
  const [allSnippets, setAllSnippets] = useState([]);

  const fetchData = async () => {
    const [modulesRes, snippetsRes] = await Promise.all([
      axios.get("/modules"),
      axios.get("/snippets"),
    ]);

    const currentModule = modulesRes.data.find((m) => m._id === id);

    setModule(currentModule);
    setAllSnippets(snippetsRes.data);

    if (currentModule?.snippetIds?.length) {
      const moduleSnippets = snippetsRes.data.filter((s) =>
        currentModule.snippetIds.includes(s._id)
      );
      setSnippets(moduleSnippets);
    } else {
      setSnippets([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const addSnippet = async (snippetId) => {
    await axios.post(`/modules/${id}/snippets`, { snippetId });
    fetchData();
  };

  const removeSnippet = async (snippetId) => {
    await axios.delete(`/modules/${id}/snippets/${snippetId}`);
    fetchData();
  };

  if (!module) {
    return (
      <div className="text-slate-500 mt-20 text-center">Loading module...</div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{module.name}</h1>
        <p className="text-sm text-slate-500">
          Build a reusable feature by grouping snippets
        </p>
      </div>

      {/* ADD SNIPPET */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-1">Add snippet to this module</h2>
        <p className="text-sm text-slate-500 mb-4">
          Select one of your existing snippets
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {allSnippets
            .filter((s) => !module.snippetIds?.includes(s._id))
            .map((s) => (
              <div
                key={s._id}
                className="border rounded-lg p-3 flex justify-between items-center hover:bg-slate-50"
              >
                <div>
                  <p className="font-medium text-slate-800">{s.title}</p>
                  <p className="text-xs text-slate-500">{s.language}</p>
                </div>

                <button
                  onClick={() => addSnippet(s._id)}
                  className="text-sm bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700"
                >
                  Add
                </button>
              </div>
            ))}
        </div>

        {allSnippets.filter((s) => !module.snippetIds?.includes(s._id))
          .length === 0 && (
          <p className="text-sm text-slate-500">
            All snippets are already added
          </p>
        )}
      </div>

      {/* MODULE SNIPPETS */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-3">Snippets in this Module</h2>

        {snippets.length === 0 ? (
          <p className="text-slate-500 text-sm">No snippets added yet</p>
        ) : (
          <ul className="space-y-3">
            {snippets.map((s) => (
              <li
                key={s._id}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <div>
                  <p className="font-medium text-slate-800">{s.title}</p>
                  <p className="text-xs text-slate-500">{s.language}</p>
                </div>

                <button
                  onClick={() => removeSnippet(s._id)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ModuleDetails;
