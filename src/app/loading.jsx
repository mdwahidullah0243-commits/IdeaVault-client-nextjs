import { RotatingTriangles } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="flex justify-center mt-12">
            <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;