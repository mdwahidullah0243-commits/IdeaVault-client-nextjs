import { Button } from "@heroui/react";
import { Lightbulb } from "lucide-react";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="mt-10 text-gray-400 px-6 md:px-16 py-16 border-t border-[#ffffff0f]">
            <div className="max-lg:w-10/12 mx-auto">
                <div className="mb-12">
                    <h1 className="flex flex-col sm:flex-row items-center gap-5 sm:gap-2 text-5xl sm:text-6xl md:text-7xl font-bold text-white">
                        <Lightbulb size={70} color="#6C63FF" /> 
                        <span>IdeaVault</span>
                    </h1>
                    <p className="mt-4 max-w-xl max-sm:text-center">
                        A platform to share, validate, and refine innovative startup ideas with the community.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-white mb-3 tracking-wide uppercase">
                            Get Notified First
                        </h3>
                        <p className="mb-4 text-sm">
                            Be the first to know when new crowdsourcing projects are posted
                        </p>

                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-gray-800 p-3 rounded-xl outline-none flex-1 text-sm"
                            />
                            <Button className='rounded-xl bg-[#079992]'>
                                Submit
                            </Button>
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
                                <FaTwitter />
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
                <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center">
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