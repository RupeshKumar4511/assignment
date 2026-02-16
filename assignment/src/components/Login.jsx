import { useState } from "react";
import { motion } from "framer-motion";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from '../context/auth.js'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (email.trim() && password.trim()) {
      const data = await UserLogin({ username: email.trim(), password: password.trim() })
      if (data.success) {
        alert("Login Successfully.");
        setEmail("")
        setPassword("")
        localStorage.setItem("user", JSON.stringify(data))
        navigate('/dashboard');
      } else {
        alert(data.message);

      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060A] text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#0B0D14] rounded-3xl p-10 shadow-2xl"
      >
        <h1 className="text-3xl font-semibold mb-2">Welcome Back</h1>
        <p className="text-white/60 mb-8">Login to your account</p>

        <div className="flex flex-col gap-5">
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input label="Password" type="password" value={password} onChange={setPassword} />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 w-full py-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 font-semibold"
            onClick={handleLogin}
          >
            Login
          </motion.button>

          <p className="text-center text-white/60 text-sm mt-4">
            Don't have an account? <span className="text-purple-400 cursor-pointer"><Link to="/signup" >Sign Up</Link></span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}