import { useNavigate } from "react-router-dom";

const SnippetCard = ({ snippet, onCopy }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{snippet.title}</h3>

      <div className="flex justify-between mt-3">
        <button
          onClick={() => onCopy(snippet._id)}
          className="text-blue-600"
        >
          Copy
        </button>

        <button
          onClick={() => navigate(`/snippets/edit/${snippet._id}`)}
          className="text-green-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default SnippetCard;
