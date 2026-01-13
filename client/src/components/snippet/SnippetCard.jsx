import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

const SnippetCard = ({ snippet, onCopy }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* HEADER */}
      <div className="flex justify-between items-center px-5 py-4 border-b">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {snippet.title}
          </h3>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
            {snippet.language}
          </span>
        </div>

        <div className="flex gap-3 text-sm">
          <button
            onClick={() => onCopy(snippet._id)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Copy
          </button>
          <button
            onClick={() => navigate(`/snippets/edit/${snippet._id}`)}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            Edit
          </button>
        </div>
      </div>

      {/* CODE PREVIEW */}
      <div className="px-4 py-3">
        <Editor
          height={expanded ? "300px" : "140px"}
          language={snippet.language}
          value={snippet.code}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 13,
            scrollBeyondLastLine: false,
            wordWrap: "on"
          }}
        />
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center px-5 py-3 border-t bg-gray-50 rounded-b-xl">
        <span className="text-xs text-gray-500">
          Copied {snippet.copyCount} times
        </span>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          {expanded ? "Collapse ▲" : "Expand ▼"}
        </button>
      </div>
    </div>
  );
};

export default SnippetCard;
