import { useState } from "react";
import Input from './Input'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { UserSignUp } from "../context/auth";

export default function Signup() {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

    const handleSignUp = async()=>{
      if(email.trim() && password.trim()){
        const data = await UserSignUp({ username:name.trim(), email: email.trim(), password: password.trim() })
        if(data.success){
          alert("SignUp Successfully. Please Login to continue");
          setTimeout(()=>{
            setEmail("")
            setName("")
            setPassword("")
            navigate('/login');
          },10)
        }else{
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
        <h1 className="text-3xl font-semibold mb-2">Create Account</h1>
        <p className=" mb-8 text-red-500"></p>

        <div className="flex flex-col gap-5">
          <Input label="Full Name" value={name} onChange={setName} />
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input label="Password" type="password" value={password} onChange={setPassword} />
          

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 w-full py-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 font-semibold" onClick={handleSignUp}
          >
            Sign Up
          </motion.button>

          <p className="text-center text-white/60 text-sm mt-4">
            Already have an account? <span className="text-purple-400 cursor-pointer"><Link to="/login">Login</Link></span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}