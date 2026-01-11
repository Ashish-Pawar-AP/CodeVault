import { useEffect, useState } from "react";
import axios from "../../api/axios";
import SnippetCard from "../../components/snippet/SnippetCard";

const Snippets = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    axios.get("/snippets").then(res => setSnippets(res.data));
  }, []);

  const copySnippet = async (id) => {
    const res = await axios.post(`/snippets/${id}/copy`);
    navigator.clipboard.writeText(res.data.code);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {snippets.map(snippet => (
        <SnippetCard
          key={snippet._id}
          snippet={snippet}
          onCopy={copySnippet}
        />
      ))}
    </div>
  );
};

export default Snippets;
