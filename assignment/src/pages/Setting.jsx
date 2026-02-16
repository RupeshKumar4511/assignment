import { useState } from "react";
import { signOut } from "../context/auth";
import { useTheme } from "../context/useTheme";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  
  const {theme,toggle} = useTheme()
  const navigate = useNavigate()
  
  
  const save = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    if(name.trim()!=="" && email.trim()!=""){
      alert("Saved")
    }else{
      alert("Required both name and email")
    }
  };


  const handleSignOut = async()=>{
    const data = await signOut();
    if(data.logout){
      localStorage.setItem("user",JSON.stringify(data));
      navigate("/login")
    }else{
      alert("Failed to sign out")
    }
  }

  return (
    <div className="max-w-xl space-y-6">
      <div className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' }  p-6 rounded-2xl border border-white/5`}>
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="space-y-4">
            <span>Name :</span>
           <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full ${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' } border border-white/40 rounded-xl px-4 py-3 outline-none`}
          />
          <span className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' } `}>Email : </span>
          <input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full ${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' } border border-white/40  rounded-xl px-4 py-3 outline-none`}
            
          />
          <button
            onClick={save}
            className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className={`${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-white text-black' }  p-6 rounded-2xl border border-white/5`}>
        <h2 className="text-xl font-semibold mb-4">Theme</h2>
        <div className="flex gap-4">
          <button
            onClick={toggle}
            className={`px-4 py-2 rounded-lg border  ${
              theme === "light" ? "bg-white text-black" : "border-white/20 bg-white text-black"
            }`}
          >
            Light
          </button>
          <button
            onClick={toggle}
            className={`px-4 py-2 rounded-lg border  ${
              theme === "dark" ? "bg-black text-white" : "border-black/20 "
            }`}
          >
            Dark
          </button>
        </div>
      </div>

       <button
            onClick={handleSignOut}
            className="px-6 py-3 rounded-xl bg-red-500 cursor-pointer"
          >
            Sign Out
          </button>
    </div>
  );
}
