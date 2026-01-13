import { useState } from "react";
import axios from "../../api/axios";
import SnippetEditor from "../../components/snippet/SnippetEditor";
import Select from "../../components/common/Select";

const CreateSnippet = () => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [category, setCategory] = useState("API");
  const [tags, setTags] = useState("");
  const [visibility, setVisibility] = useState("private");
  const [code, setCode] = useState("");

  const submitHandler = async () => {
    if (!title || !code) {
      alert("Title and code are required");
      return;
    }

    await axios.post("/snippets", {
      title,
      language,
      category,
      tags: tags.split(",").map((t) => t.trim()),
      visibility,
      code,
    });

    alert("Snippet created successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Create New Snippet
          </h1>
          <p className="text-slate-500 text-sm">
            Save reusable code with metadata for easy search
          </p>
        </div>

        <button
          onClick={submitHandler}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium shadow"
        >
          Save Snippet
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: META DATA */}
        <div className="lg:col-span-1 space-y-5">
          {/* TITLE */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Snippet Title
            </label>
            <input
              type="text"
              placeholder="e.g. Register API"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* LANGUAGE */}
          <div>
            <Select
              label="Language"
              value={language}
              onChange={setLanguage}
              options={["javascript", "typescript", "python", "java"]}
            />
          </div>

          {/* CATEGORY */}
          <div>
            <Select
              label="Category"
              value={category}
              onChange={setCategory}
              options={["API", "Component", "Utility", "Config"]}
            />
          </div>

          {/* TAGS */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Tags
            </label>
            <input
              type="text"
              placeholder="auth, register, jwt"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-500 mt-1">
              Separate tags with commas
            </p>
          </div>

          {/* VISIBILITY */}
          <div>
            <Select
              label="Visibility"
              value={visibility}
              onChange={setVisibility}
              options={["private", "public"]}
            />
          </div>
        </div>

        {/* RIGHT: CODE EDITOR */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="border-b px-4 py-3">
            <h2 className="text-sm font-semibold text-slate-700">
              Code Editor
            </h2>
          </div>

          <div className="p-3">
            <SnippetEditor code={code} setCode={setCode} language={language} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSnippet;
