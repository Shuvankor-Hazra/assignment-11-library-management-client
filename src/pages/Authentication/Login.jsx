import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";


const Login = () => {
    const navigate = useNavigate();
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    // Google Sign in
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            toast.success('Google sign in successful')
            navigate('/')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    // Sign In
    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log({ email, pass });
        try {
            const result = await signIn(email, pass)
            console.log(result);
            navigate('/')
            toast.success('Sign in successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='lg:w-1/2 flex justify-center p-6'>
                    <img src={`${'https://i.ibb.co/vZY0S79/banner.png'}`} alt="" />
                </div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <Link to='/' className="cursor-pointer text-2xl font-bold">LibraryRoom</Link>
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Welcome back!
                    </p>

                    <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                        <div className='px-4 py-2'>
                            <BsGoogle />
                        </div>

                        <span className='w-5/6 px-4 py-3 font-bold text-center'>
                            Sign in with Google
                        </span>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='pass'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/register'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign up
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login