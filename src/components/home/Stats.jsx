import { stats } from "@/lib/data";

const Stats = () => {
    return (
        <section className="bg-[#ffffff05] border-b border-[#ffffff0d]">
            <div className="w-10/12 mx-auto px-10">
                <div className="grid grid-cols-4 py-6 border-y border-[#ffffff0f]">
                    {
                        stats.map((stat) => (
                            <div key={stat.id} className="text-center">
                                <h3 className="text-3xl font-extrabold bg-linear-135 from-0% from-[#6C63FF] to-100% to-[#a855f7] bg-clip-text text-transparent">
                                    {stat.num}
                                </h3>
                                <p className="text-sm text-[#6b7280] mt-0.5">
                                    {stat.level}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Stats;