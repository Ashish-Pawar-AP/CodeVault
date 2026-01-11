import { useEffect, useState } from "react";
import { getCollections } from "../../api/collection.api";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getCollections().then(res => setCollections(res.data));
  }, []);

  return (
    <div>
      {collections.map(c => (
        <div key={c._id} className="border p-3 mb-2">
          {c.name}
        </div>
      ))}
    </div>
  );
};

export default Collections;
