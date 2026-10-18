import BrandHeader from "@/components/add-idea/BrandHeader";
import IdeaPostForm from "@/components/add-idea/IdeaPostForm";
import { addIdea } from "@/lib/actions";
import { positions, width } from "@/lib/frontend-data";

const AddIdeaPage = () => {
    return (
        <div className={`bg-[#1A1A2E] min-h-screen text-white pb-15 relative overflow-hidden`}>
            {/* Disign background with ball */}
            <div className='fixed inset-0 pointer-events-none z-0' aria-hidden="true">
                {
                    [...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute h-70 rounded-[50%] bg-[#E8B84B] blur-[80px]'
                            style={{ left: `${positions.left[i]}%`, top: `${positions.top[i]}%`, width: `${width[i]}px`, opacity: 0.06 + i * 0.01 }} />
                    ))
                }
            </div>

            {/* Main Container */}
            <div className='relative z-1 max-w-180 mx-auto px-5'>
                <BrandHeader />

                <IdeaPostForm addIdea={addIdea} />
            </div>
        </div>
    );
};

export default AddIdeaPage;