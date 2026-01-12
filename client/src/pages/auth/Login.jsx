import { useState } from "react";
import { loginUser } from "../../api/auth.api";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const submitHandler = async () => {
    try {
      const res = await loginUser({ email, password });
      login(res.data);
      navigate('/')
    } catch (error) {
      toast(error?.response?.data?.message || "Login Failed")
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 border w-80">
        <h2 className="mb-5 font-bold text-2xl ">Login</h2>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={submitHandler}
          className="w-full bg-black text-white p-2 mb-2"
        >
          Login
        </button>
        <p className="text-sm">
          No account?{" "}
          <Link className="text-blue-500 underline" to="/register" >
          Register
          </Link>
        </p>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
