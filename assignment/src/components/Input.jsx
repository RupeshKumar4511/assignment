export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-white/70">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gradient-to-r from-[#0F121A] to-[#121520] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/60 transition"
      />
    </div>
  );
}