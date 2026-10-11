import { Send, UserRoundGroup } from "lucide-react";
import WorkCard from "./WorkCard";
import { FaRegLightbulb } from "react-icons/fa";

const HowDoesWork = () => {
    return (
        <div className="w-10/12 mx-auto my-15 space-y-10">
            <div className="text-center space-y-3">
                <h2 className="text-3xl font-semibold">
                    How Does IdeaVault Work?
                </h2>

                <p className="text-[#e8eaf0b2]">
                    IdeaVault is a workforce innovation software that turns your ideas into measurable impact. Our Platform helps your organization to capture, evaluate, and implement ideas with ease. From submission to execution, our platform streamlines engagement, surfaces top ideas, and transforms them into measurable results, all in one centralized system.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-10">
                <WorkCard
                    icon={<Send size={40} color="#fb5629" />}
                    title={'Submit Your Ideas'}
                    description={'Share your thoughts on driving innovation and streamlining operations.'}
                />

                <WorkCard
                    icon={<UserRoundGroup size={40} color="#fb5629" />}
                    title={'Collaborate with Others'}
                    description={'Collaborate with innovators to refine ideas, share insights, and shape impactful solutions.'}
                />

                <WorkCard
                    icon={<FaRegLightbulb size={40} color="#fb5629" />}
                    title={'Shape the Future'}
                    description={'Selected ideas will be transformed into powerful initiatives that boost operational excellence.'}
                />
            </div>
        </div>
    );
};

export default HowDoesWork;