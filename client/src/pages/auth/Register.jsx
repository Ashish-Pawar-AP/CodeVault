import { useState } from "react";
import { registerUser } from "../../api/auth.api";

const Register = () => {
  const [form, setForm] = useState({});

  const submitHandler = async () => {
    await registerUser(form);
    alert("Check your email for verification");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 border w-80">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <input
          type="password"
          className="border p-2 w-full mb-2"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        <button
          onClick={submitHandler}
          className="w-full bg-black text-white p-2"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
