import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('https://soule-backend-h8dn.onrender.com/auth/login', {
        email: form.email,
        password: form.password,
      });

      const token = res.data.access_token;
      localStorage.setItem('access_token', token);
      toast.success('Welcome!', { position: "top-center" });
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error("Login failed! Email or password might be wrong.", { position: "top-center" });
      setError("Login failed! Email or password might be wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-2">
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-8 border border-blue-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-600 rounded-full p-3 mb-2 shadow">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="12" fill="#2563eb"/>
              <path d="M8 17v-1a4 4 0 0 1 8 0v1" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="9" r="3" stroke="#fff" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-700 mb-1">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Log in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              className="border border-blue-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="border border-blue-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition pr-10"
                value={form.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition"
            disabled={loading}
            type="submit"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <div className="text-red-500 text-center text-sm">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
