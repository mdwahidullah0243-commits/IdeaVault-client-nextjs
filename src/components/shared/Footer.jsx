import { Lightbulb, Send } from "lucide-react";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="mt-10 text-gray-400 px-6 md:px-16 py-16 border-t border-[#ffffff0f]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="flex items-center gap-2 text-6xl md:text-7xl font-bold text-white">
                        <Lightbulb color="#6C63FF" size={60} /> IdeaVault
                    </h1>
                    <p className="mt-4 max-w-xl">
                        A platform to share, validate, and refine innovative startup ideas with the community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-white mb-3 tracking-wide uppercase">
                            Get Notified First
                        </h3>
                        <p className="mb-4 text-sm">
                            Be the first to know when new crowdsourcing projects are posted
                        </p>

                        <div className="flex items-center bg-gray-800 pl-4 rounded-xl">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-transparent outline-none flex-1 text-sm"
                            />
                            <span className="text-slate-300 text-lg cursor-pointer hover:bg-slate-600 p-2 rounded-full">
                                <Send />
                            </span>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="text-white mb-3 tracking-wide">PLATFORM</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Browse Ideas</li>
                            <li className="hover:text-white cursor-pointer">Submit Idea</li>
                            <li className="hover:text-white cursor-pointer">Profile</li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white mb-3 tracking-wide">CATEGORIES</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Tech</li>
                            <li className="hover:text-white cursor-pointer">AI</li>
                            <li className="hover:text-white cursor-pointer">Health</li>
                            <li className="hover:text-white cursor-pointer">Education</li>
                            <li className="hover:text-white cursor-pointer">Finance</li>
                            <li className="hover:text-white cursor-pointer">Productivity</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white mb-3 tracking-wide">
                            CONTACT US
                        </h3>

                        <ul className="space-y-2">
                            <li>786 901 1622</li>
                            <li>info@ideavault.com</li>
                        </ul>

                        <div className="flex gap-5 mt-4 text-white text-lg">
                            <span className="cursor-pointer">
                                <FaXTwitter />
                            </span>
                            <span className="cursor-pointer">
                                <GrLinkedinOption />
                            </span>
                            <span className="cursor-pointer">
                                <IoLogoYoutube />
                            </span>
                            <span className="cursor-pointer">
                                <FaSquareInstagram />
                            </span>
                            <span className="cursor-pointer">
                                <BsFacebook />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        © 2026 IdeaVault. All rights reserved.
                    </p>

                    <div className="text-white">
                        <span className="cursor-pointer">Developed by </span>
                        <span className="cursor-pointer text-[#6C63FF]">Wahidullah</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;