import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCollections,
  createCollection,
  deleteCollection
} from "../../api/collection.api";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchCollections = async () => {
    const res = await getCollections();
    setCollections(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  const handleCreate = async () => {
    if (!name.trim()) {
      setError("Collection name is required");
      return;
    }

    await createCollection({ name });
    setName("");
    setError("");
    setShowModal(false);
    fetchCollections();
  };

  const handleDelete = async (id) => {
    await deleteCollection(id);
    fetchCollections();
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-slate-500">
        Loading collections...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">
          Collections
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
        >
          + New Collection
        </button>
      </div>

      {/* EMPTY STATE */}
      {collections.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <h2 className="text-lg font-semibold text-slate-700">
            No collections yet
          </h2>
          <p className="text-sm text-slate-500 mt-1 mb-4">
            Use collections to organize related snippets
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Create your first collection
          </button>
        </div>
      ) : (
        /* COLLECTION LIST */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <div
              key={c._id}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-slate-800">
                  {c.name}
                </h3>

                <button
                  onClick={() => navigate(`/collections/${c._id}`)}
                  className="mt-3 text-sm text-indigo-600 hover:underline"
                >
                  Manage snippets →
                </button>
              </div>

              <button
                onClick={() => handleDelete(c._id)}
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
              Create Collection
            </h2>

            <input
              type="text"
              placeholder="Collection name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />

            {error && (
              <p className="text-sm text-red-500 mt-2">
                {error}
              </p>
            )}

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

export default Collections;
