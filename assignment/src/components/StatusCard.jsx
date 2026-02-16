import { motion } from "framer-motion";
import { useTheme } from "../context/useTheme";

export default function StatusCard({ title, value }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const styles = {
    container: isDark
      ? "bg-[#0B0D14] text-white border-white shadow-none"
      : "bg-white text-gray-900 border-gray-200 shadow-sm",

    label: isDark ? "text-white/60" : "text-gray-500",

    value: isDark ? "text-white" : "text-gray-900",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`
        ${styles.container}
        rounded-2xl p-6 border
        transition-all duration-300
        hover:-translate-y-1
      `}
    >
      <p className={`${styles.label} text-sm font-medium`}>
        {title}
      </p>

      <h2 className={`${styles.value} text-3xl font-semibold mt-2`}>
        {value}
      </h2>
    </motion.div>
  );
}
