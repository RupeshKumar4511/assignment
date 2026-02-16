import { useEffect, useState } from "react";
import FakeFetch from '../context/fakeFetch.js'
import StatusCard from './StatusCard.jsx'

export default function DashboardHome() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    FakeFetch()
      .then((d) => setData(d))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-full text-white/60">
        Loading dashboard...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-full text-red-400">
        {error}
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatusCard title="Total Users" value={data.users} />
      <StatusCard title="Companies" value={data.companies} />
      <StatusCard title="Active Today" value={data.activeToday} />
      <StatusCard title="Subscriptions" value={data.subscriptions} />
    </div>
  );
}
