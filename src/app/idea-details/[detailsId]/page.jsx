import HeadingTextPart from "@/components/idea-details/HeadingTextPart";
import InteractionPart from "@/components/idea-details/InteractionPart";
import SimpleTitleDesc from "@/components/idea-details/SimpleTitleDesc";
import TagGroupBasic from "@/components/idea-details/TagGroupBasic";
import { Separator } from "@heroui/react";
import Image from "next/image";

const IdeaDetailsPage = () => {
    return (
        <div className="w-3/5 mx-auto mb-20 mt-12 flex flex-col justify-between bg-[#ffffff0a] border border-[#ffffff14] rounded-2xl p-5 transition-all duration-300">
            <div className="mb-4">
                <Image
                    src={`https://i.ibb.co.com/hFLnZdj0/coach-nova-21237327280.png`}
                    alt={'title'}
                    width={300}
                    height={200}
                    className="w-full h-70 rounded-xl"
                />
            </div>

            <div className="flex justify-between items-start mb-3">
                <div className="inline-block py-1 px-2.5 rounded-lg text-[12px] font-semibold tracking-wider uppercase border border-[#6C63FF30] text-[#6C63FF] bg-[#6C63FF18]">
                    HealthTech
                </div>
                <span className="text-[12px] text-[#4b5563]">#trending</span>
            </div>

            <HeadingTextPart />

            {/* Tags */}
            <div className="mt-2">
                <TagGroupBasic />
            </div>

            <Separator className="bg-[#e8eaf027] mt-8" />

            <div className="mt-6 flex items-center gap-25">
                {/* Target Audience */}
                <SimpleTitleDesc
                    title={'Target Audience'}
                    description={'Health-Conscious individuals aged 25-45'}
                />

                <Separator orientation="vertical" className="bg-[#e8eaf027]" />

                {/* Budget */}
                <SimpleTitleDesc
                    title={'Budget'}
                    description={'$1000000'}
                />
            </div>

            <div className="mt-6 space-y-6">
                {/* Problem Statement */}
                <SimpleTitleDesc
                    title={'Problem Statement'}
                    description={'Many people struggle to stay motivated with home workouts and lack the engagement of gym classes.'}
                />

                {/* Proposed Solution */}
                <SimpleTitleDesc
                    title={'Proposed Solution'}
                    description={'A VR fitness platform that provides gym-quality workouts with immersive experiences an social features.'}
                />
            </div>

            <Separator className="bg-[#e8eaf027] mt-8" />

            {/* Interaction System */}
            <InteractionPart />
        </div>
    );
};

export default IdeaDetailsPage;