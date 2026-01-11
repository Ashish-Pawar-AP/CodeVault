import { useEffect, useState } from "react";
import { getModules } from "../../api/module.api";

const Modules = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getModules().then(res => setModules(res.data));
  }, []);

  return (
    <div>
      {modules.map(m => (
        <div key={m._id} className="border p-3 mb-2">
          {m.name}
        </div>
      ))}
    </div>
  );
};

export default Modules;
