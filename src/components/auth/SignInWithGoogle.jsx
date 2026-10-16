import { FcGoogle } from "react-icons/fc";

const SignInWithGoogle = ({ content }) => {
    // const handleSignInWithGoogle = async () => {
    //     const data = await authClient.signIn.social({
    //         provider: 'google'
    //     });
    // };

    return (
        <button className="border-none btn gap-2 w-full rounded-xl text-sm text-shadow-none font-medium shadow-none py-2 h-auto">
            <FcGoogle size={22} /> {content}
        </button>
    );
};

export default SignInWithGoogle;