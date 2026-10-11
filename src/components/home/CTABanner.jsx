import Link from "next/link";

const CTABanner = () => {
    return (
        <section className="w-10/12 mx-auto mt-30 mb-20 px-8">
            <div className="bg-linear-135 from-0% from-[#6c63ff26] to-100% to-[#a855f71a] border border-[#6c63ff40] rounded-[24px] p-12 text-center relative overflow-hidden">
                <div className="absolute -top-15 -right-15 w-50 h-50 rounded-full bg-[#6c63ff1a] blur-2xl" />

                <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#6C63FF] mb-3">
                    Ready to Innovate?
                </h3>

                <h2 className="text-4xl font-extrabold tracking-[-0.02em] text-white mb-4">
                    Share Your Next Big Idea
                </h2>

                <p className="text-base text-[#9ca3b8] mb-7 max-w-120 mx-auto">
                    It only takes 2 minutes to post your concept and start getting community feedback.
                </p>

                <Link href={`/add-idea`}>
                    <button className="mx-auto flex gap-2 items-center bg-linear-135 from-[#6C63FF] to-[#a855f7] text-white border-none rounded-[10px] py-3 px-6 text-base font-semibold cursor-pointer transition-all duration-200 tracking-[0.02em] hover:-translate-y-0.5 hover:shadow-[0px_8px_24px] hover:shadow-[#6c63ff66]">
                        Post Your Idea
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default CTABanner;