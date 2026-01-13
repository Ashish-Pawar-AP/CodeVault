import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const CollectionDetails = () => {
  const { id } = useParams();

  const [collection, setCollection] = useState(null);
  const [allSnippets, setAllSnippets] = useState([]);
  const [collectionSnippets, setCollectionSnippets] = useState([]);

  const fetchData = async () => {
    const [collectionsRes, snippetsRes] = await Promise.all([
      axios.get("/collections"),
      axios.get("/snippets")
    ]);

    const currentCollection = collectionsRes.data.find(
      (c) => c._id === id
    );

    setCollection(currentCollection);
    setAllSnippets(snippetsRes.data);

    const assigned = snippetsRes.data.filter(
      (s) => s.collectionId === id
    );

    setCollectionSnippets(assigned);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const addSnippet = async (snippetId) => {
    await axios.put(`/snippets/${snippetId}`, {
      collectionId: id
    });
    fetchData();
  };

  const removeSnippet = async (snippetId) => {
    await axios.put(`/snippets/${snippetId}`, {
      collectionId: null
    });
    fetchData();
  };

  if (!collection) {
    return (
      <div className="text-center mt-20 text-slate-500">
        Loading collection...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {collection.name}
        </h1>
        <p className="text-sm text-slate-500">
          Organize related snippets into this collection
        </p>
      </div>

      {/* ADD SNIPPET */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-3">
          Add snippet to this collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {allSnippets
            .filter((s) => s.collectionId !== id)
            .map((s) => (
              <div
                key={s._id}
                className="border rounded-lg p-3 flex justify-between items-center hover:bg-slate-50"
              >
                <div>
                  <p className="font-medium text-slate-800">
                    {s.title}
                  </p>
                  <p className="text-xs text-slate-500">
                    {s.language}
                  </p>
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

        {allSnippets.filter((s) => s.collectionId !== id)
          .length === 0 && (
          <p className="text-sm text-slate-500">
            All snippets are already in this collection
          </p>
        )}
      </div>

      {/* COLLECTION SNIPPETS */}
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-semibold mb-3">
          Snippets in this collection
        </h2>

        {collectionSnippets.length === 0 ? (
          <p className="text-slate-500 text-sm">
            No snippets added yet
          </p>
        ) : (
          <ul className="space-y-3">
            {collectionSnippets.map((s) => (
              <li
                key={s._id}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <div>
                  <p className="font-medium text-slate-800">
                    {s.title}
                  </p>
                  <p className="text-xs text-slate-500">
                    {s.language}
                  </p>
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

export default CollectionDetails;
