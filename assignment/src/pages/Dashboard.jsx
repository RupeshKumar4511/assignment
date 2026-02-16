import { useState } from "react";
import Settings from "./Setting.jsx";
import DashboardHome from "../components/DashboardHome.jsx";
import Users from "./Users.jsx";
import { useTheme } from "../context/useTheme.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

  const [page, setPage] = useState("home");
  const [currentUser, setCurrentUser] = useState({
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    company: {
      name: "Romaguera-Crona",
    }
  });
  const { theme } = useTheme();
  const navigate = useNavigate()
  const data = localStorage.getItem("user");
  useEffect(() => {
    if (data.logout) {
      navigate("/login")
    }
  }, [navigate, data])

  return (
    <div className={`min-h-screen ${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-blue-100 text-black'}  text-white flex`}>
      {/* Sidebar */}
      <aside className={`w-64 ${theme == 'dark' ? 'bg-[#05060A] text-white' : 'bg-blue-200 text-black'}   p-6 border-r border-white/5`}>
        <h1 className="text-2xl font-semibold mb-10">Dashboard</h1>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setPage("home")}
            className={`text-left px-4 py-2 rounded-lg ${page === "home" ? "bg-white/10" : "hover:bg-white/5"
              }`}
          >
            Summary
          </button>
          <button
            onClick={() => setPage("settings")}
            className={`text-left px-4 py-2 rounded-lg ${page === "settings" ? "bg-white/10" : "hover:bg-white/5"
              }`}
          >
            Settings
          </button>

          <button
            onClick={() => setPage("users")}
            className={`text-left px-4 py-2 rounded-lg ${page === "users" ? "bg-white/10" : "hover:bg-white/5"
              }`}
          >
            Users
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        {page === "home" && <DashboardHome />}
        {page === "settings" && <Settings setCurrentUser={setCurrentUser} />}
        {page === "users" && <Users currentUser={currentUser} />}
      </main>
    </div>
  );
}
