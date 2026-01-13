import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Select = ({ label, value, onChange, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}

      {/* SELECT BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2.5 border border-slate-300 rounded-lg bg-white hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition"
      >
        <span className="text-slate-700 capitalize">{value}</span>
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <ul className="absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`px-4 py-2.5 cursor-pointer hover:bg-indigo-50 capitalize ${
                value === option
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-slate-700"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
