import { trendingIdeas } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const TrendingIdeas = () => {
    return (
        <section className="w-10/12 mx-auto py-15 px-8">
            <div className="flex justify-between items-end mb-8">
                {/* .section-label { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #6C63FF; margin-bottom: 10px; } */}
                <div>
                    <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#6C63FF] mb-2.5">
                        Trending Now
                    </h3>
                    <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white">
                        Hot Ideas This Week
                    </h2>
                </div>

                <Link href={'/ideas'}>
                    <button className="hover:border-[#6C63FF] hover:text-[#6C63FF] bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-xl py-2.5 px-5.5 text-sm font-medium cursor-pointer transition-all duration-200">
                        View all →
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {
                    trendingIdeas.map((idea, idx) => (
                        <div key={idea.id} className="flex flex-col justify-between hover:bg-[#6c63ff14] hover:border-[#6c63ff4d] hover:-translate-y-1 bg-[#ffffff0a] border border-[#ffffff14] rounded-2xl p-5 transition-all duration-300 cursor-pointer">
                            <div className="mb-4">
                                <Image
                                    src={idea.imageUrl}
                                    alt={idea.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-40 rounded-xl"
                                />
                            </div>

                            <div className="flex justify-between items-start mb-3">
                                <div className="inline-block py-1 px-2.5 rounded-lg text-[12px] font-semibold tracking-wider uppercase" style={{ background: `${idea.color}18`, color: idea.color, border: `1px solid ${idea.color}30` }}>
                                    {idea.category}
                                </div>
                                <span className="text-[12px] text-[#4b5563]">#{idx + 1} trending</span>
                            </div>

                            <div className="mb-4 space-y-2">
                                <h3 className="text-base font-bold text-[#e8eaf0]">
                                    {idea.title}
                                </h3>

                                <p className="text-sm font-medium text-[#e8eaf0b2] line-clamp-3">
                                    {idea.shortDesc}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0" style={{ background: `${idea.color}25`, color: idea.color, width: 28, height: 28, fontSize: 10 }}>{idea.avatar}</div>
                                    <span className="text-[12px] text-[#6b7280]">
                                        {idea.author}
                                    </span>
                                </div>

                                <Link href={`/ideas`}>
                                    <button className="bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-[10px] py-3 px-6 text-base font-medium cursor-pointer transition-all duration-200 hover:border-[#6C63FF] hover:text-[#6C63FF]">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default TrendingIdeas;