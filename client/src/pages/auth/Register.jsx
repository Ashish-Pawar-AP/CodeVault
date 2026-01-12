import { useState } from "react";
import { registerUser } from "../../api/auth.api";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate()

  const submitHandler = async () => {
    try {
      await registerUser(form);
      alert("Check your email for verification");
      navigate('/login')
    } catch (error) {
      toast(error?.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 border w-80">
        <h2 className="mb-5 font-bold text-2xl ">Register</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="border p-2 w-full mb-2"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          onClick={submitHandler}
          className="w-full bg-black text-white p-2 mb-2"
        >
          Register
        </button>
        <p className="text-sm">
          Already have an account?{" "}
          <Link className="text-blue-500 underline" to="/">
            Login
          </Link>
        </p>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;
