import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

import SnippetEditor from "../../components/snippet/SnippetEditor";
import VersionHistory from "../../components/snippet/VersionHistory";

const EditSnippet = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSnippet = async () => {
      const res = await axios.get(`/snippets/${id}`);
      setTitle(res.data.title);
      setLanguage(res.data.language);
      setCode(res.data.code);
      setLoading(false);
    };

    fetchSnippet();
  }, [id]);

  const updateHandler = async () => {
    await axios.put(`/snippets/${id}`, {
      title,
      language,
      code
    });
    alert("Snippet updated");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {/* LEFT SIDE – EDITOR */}
      <div className="col-span-2">
        <input
          className="border p-2 w-full mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <SnippetEditor
          code={code}
          setCode={setCode}
          language={language}
        />

        <button
          onClick={updateHandler}
          className="mt-4 bg-black text-white px-4 py-2"
        >
          Update Snippet
        </button>
      </div>

      {/* RIGHT SIDE – VERSION HISTORY */}
      <div className="col-span-1">
        <VersionHistory
          snippetId={id}
          onSelectVersion={(oldCode) => setCode(oldCode)}
        />
      </div>
    </div>
  );
};

export default EditSnippet;
