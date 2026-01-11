import { useEffect, useState } from "react";
import axios from "../../api/axios";

const VersionHistory = ({ snippetId, onSelectVersion }) => {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        const res = await axios.get(
          `/snippets/${snippetId}/versions`
        );
        setVersions(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (snippetId) fetchVersions();
  }, [snippetId]);

  if (loading) {
    return <p className="text-sm text-gray-500">Loading versions...</p>;
  }

  if (versions.length === 0) {
    return <p className="text-sm text-gray-500">No versions found</p>;
  }

  return (
    <div className="border rounded p-3 mt-4">
      <h3 className="font-semibold mb-2">Version History</h3>

      <ul className="space-y-2">
        {versions.map((version, index) => (
          <li
            key={version._id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span className="text-sm">
              Version {versions.length - index} –{" "}
              {new Date(version.createdAt).toLocaleString()}
            </span>

            <button
              onClick={() => onSelectVersion(version.code)}
              className="text-blue-600 text-sm"
            >
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VersionHistory;
