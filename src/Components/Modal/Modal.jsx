import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/MyContext';
import { useNavigate } from 'react-router-dom';


const Modal = ({ closeModal }) => {
    
    const {createUser} = useContext(AuthContext) 
    // console.log(createUser)
    const From = location?.state?.from?.pathname || '/signIn'
    const navigate = useNavigate()
    // const {createUser} = useContext(authContext)
    // console.log(createUser)

    const signUpFormHandler = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value 
        const password = form.password.value 
        const confirmPassword = form.confirmPassword.value

        if(password !== confirmPassword){
            return toast.error(`Passwords do not match. Please ensure both fields are identical. `)
        }

        createUser(email, password)
        .then(result => {
            const user = result.user 
            form.reset()
            toast.success(`Successfully Registered `)
            navigate(From , {replace:true})
        })
        .catch(err => console.error(err))


        console.log(email)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Sign up with email</h3>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <form
                    onSubmit={signUpFormHandler}
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                            <input
                                name='email'
                                required
                                type="email"
                                placeholder="Enter your email address"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password *</label>
                            <div >
                                <input
                                    name='password'
                                    required
                                    type="password"
                                    placeholder="Enter your password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                               
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password *</label>
                            <div className="relative">
                                <input
                                required
                                name='confirmPassword'
                                    type="password"
                                    placeholder="Re-enter your password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                               
                            </div>
                        </div>

                        <div>
                            <button

                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;