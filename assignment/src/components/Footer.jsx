import { FaDiscord } from 'react-icons/fa';
import { FaGithub, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="border-t border-white/5 py-12 px-6">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-sm opacity-40">© 2024 Squid Template. All rights reserved.</div>
                        <div className="flex gap-6 opacity-60">
                            <
                                FaXTwitter size={20} className="hover:text-purple-400 cursor-pointer" />
                            <FaGithub size={20} className="hover:text-purple-400 cursor-pointer" />
                            <FaDiscord size={20} className="hover:text-purple-400 cursor-pointer" />
                        </div>
                    </div>
                </div>
  )
}

export default Footer
