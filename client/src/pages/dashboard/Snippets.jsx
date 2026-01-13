import { useEffect, useState } from "react";
import axios from "../../api/axios";
import SnippetCard from "../../components/snippet/SnippetCard";

const Snippets = () => {
  const [snippets, setSnippets] = useState([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");

  const fetchSnippets = async () => {
    const res = await axios.get("/snippets/search", {
      params: {
        q: search,
        language,
        category
      }
    });
    setSnippets(res.data);
  };

  useEffect(() => {
    fetchSnippets();
  }, [search, language, category]);

  return (
    <div>
      {/* 🔍 SEARCH BAR */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search snippets..."
          className="px-4 py-2 border rounded-lg w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded-lg"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">All Languages</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <select
          className="px-4 py-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="API">API</option>
          <option value="Component">Component</option>
          <option value="Utility">Utility</option>
        </select>
      </div>

      {/* SNIPPETS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {snippets.map((snippet) => (
          <SnippetCard
            key={snippet._id}
            snippet={snippet}
            onCopy={async (id) => {
              const res = await axios.post(`/snippets/${id}/copy`);
              navigator.clipboard.writeText(res.data.code);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Snippets;
