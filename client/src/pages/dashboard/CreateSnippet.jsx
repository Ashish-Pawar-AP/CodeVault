import { useState } from "react";
import axios from "../../api/axios";
import SnippetEditor from "../../components/snippet/SnippetEditor";

const CreateSnippet = () => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  const submitHandler = async () => {
    await axios.post("/snippets", {
      title,
      language,
      code
    });
    alert("Snippet created");
  };

  return (
    <div className="p-6">
      <input
        className="border p-2 w-full mb-3"
        placeholder="Snippet title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <SnippetEditor
        code={code}
        setCode={setCode}
        language={language}
      />

      <button
        onClick={submitHandler}
        className="mt-4 bg-black text-white px-4 py-2"
      >
        Save Snippet
      </button>
    </div>
  );
};

export default CreateSnippet;
