import React, { useContext } from 'react';
import img from '../../assets/signIn.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/MyContext';
import toast from 'react-hot-toast';
const SignIn = () => {
    const { signIn } = useContext(AuthContext)

    const location = useLocation()
    const From = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const loginFormHandler = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email , password)
        .then(result => {
            const user = result.user 
            form.reset()
            toast.success(`Successfully Logged in !`)
            const tokenInfo = {
                email: user.email
            }
           fetch(`http://localhost:3000/jwt`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(tokenInfo)
           })
           .then(res => res.json())
           .then(data => {
            console.log(data.token)
            localStorage.setItem('foodi' , data.token)
            navigate(From, { replace: true })
           })
        })
        .catch(err => console.error(err))

    }
    return (
        <div className=" text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white  flex justify-center flex-1  ">
                <div className="flex-1 text-center hidden lg:flex">
                    <div
                        className="flex items-center"
                    >
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className='flex justify-center'>
                        <img
                            className='w-[50px] '
                            src="https://foodibd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmall-logo.c8ee8f2f.png&w=1920&q=75" alt="" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <div className="w-full flex-1">
                            <div className="flex flex-col items-center">
                                <h1 className='text-5xl font-bold'>Sign in</h1>
                                <p className='mt-5 tracking-wide text-gray-500 text-lg font-semibold '>Sign in into your account from here</p>
                            </div>
                            <div className="my-12 border-b text-center">

                            </div>
                            <form
                                onSubmit={loginFormHandler}
                                className='mb-5'
                            >
                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email"
                                        name='email'
                                        required
                                        placeholder="Email"
                                    />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        name='password'
                                        required
                                        placeholder="Password"
                                    />
                                    <button className="mt-5 tracking-wide font-semibold bg-[#C90101] text-white w-full py-4 rounded-lg hover:bg-[#DA3219] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy={7} r={4} />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-">Sign In</span>
                                    </button>

                                </div>
                            </form>

                            <hr className='w-3/4 container mx-auto' />
                            <Link to={`/signUp`}
                                className='flex justify-center mt-6'
                            >
                                <div className="border  w-3/4 border-red-500 p-4 text-center text-sm text-gray-600 mt-2">
                                    <h1 className="text-red-500 hover:text-red-700 font-medium">
                                        Sign Up (New user)
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignIn;