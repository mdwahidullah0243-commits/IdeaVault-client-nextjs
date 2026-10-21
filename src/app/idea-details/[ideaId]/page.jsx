import HeadingTextPart from "@/components/idea-details/HeadingTextPart";
import InteractionPart from "@/components/idea-details/InteractionPart";
import SimpleTitleDesc from "@/components/idea-details/SimpleTitleDesc";
import TagGroupBasic from "@/components/idea-details/TagGroupBasic";
import { auth } from "@/lib/auth";
import { getIdeaById } from "@/lib/backend-data";
import { colors } from "@/lib/frontend-data";
import { Separator } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

export const metadata = {
    title: "Explore Details",
};

export const instant = false;

const IdeaDetailsPage = async ({ params }) => {
    const { ideaId } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const idea = await getIdeaById(ideaId, token);

    const { date, comments, imageUrl, title, category, detailedDesc, tags, audience, budget, problem, solution } = idea;

    const categoryStyle = {
        color: colors[comments % colors.length],
        background: `${colors[comments % colors.length]}18`,
        border: `1px solid ${colors[comments % colors.length]}30`
    };

    return (
        <div className="w-4/5 lg:w-3/5 mx-auto mb-20 mt-12 flex flex-col justify-between bg-[#ffffff0a] border border-[#ffffff14] rounded-2xl p-5 transition-all duration-300">
            <div className="mb-4">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full max-sm:h-50 sm:h-60 md:h-70 rounded-xl"
                />
            </div>

            <div className="flex justify-between items-start mb-3">
                <div
                    className={`inline-block py-1 px-2.5 rounded-lg text-[12px] font-semibold tracking-wider uppercase`}
                    style={categoryStyle}
                >
                    {category}
                </div>
                <span className="text-[12px] text-[#4b5563]">#trending</span>
            </div>

            <HeadingTextPart
                title={title}
                details={detailedDesc}
                customDate={date}
            />

            {/* Tags */}
            <div className="mt-2">
                <TagGroupBasic tags={tags} />
            </div>

            <Separator className="bg-[#e8eaf027] mt-8" />

            <div className="mt-6 space-y-6">
                {/* Target Audience */}
                <SimpleTitleDesc
                    title={'Target Audience'}
                    description={audience}
                />

                {/* Budget */}
                <SimpleTitleDesc
                    title={'Budget'}
                    description={budget}
                />

                {/* Problem Statement */}
                <SimpleTitleDesc
                    title={'Problem Statement'}
                    description={problem}
                />

                {/* Proposed Solution */}
                <SimpleTitleDesc
                    title={'Proposed Solution'}
                    description={solution}
                />
            </div>

            <Separator className="bg-[#e8eaf027] mt-8" />

            {/* Interaction System */}
            <InteractionPart idea={idea} />
        </div>
    );
};

export default IdeaDetailsPage;