import React, { useContext, useState } from 'react'
import HandleLogin from '../../utils/HandleLogin';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../Loading/Spinner';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {user, setUser} = useContext(AuthContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        await new Promise(resolve => setTimeout(resolve, 800));
        const loggedInUser = HandleLogin(email, password); // return object if user is Admin / Employee
        setUser(loggedInUser);

        localStorage.setItem("loggedInUser" , JSON.stringify(loggedInUser));
        setEmail("");
        setPassword("");
        setLoading(false);
    }

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-black font-mono '>
        {loading && <Spinner fullScreen size="lg" />}
        
        <div className='w-full max-w-md'>
            <div className=' bg-linear-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/35 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700'>
                <div className='text-center mb-8'>
                    <div className='inline-block bg-white p-3 rounded-lg mb-4'>
                        <svg className='w-8 h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                        </svg>
                    </div>
                    <h1 className='text-3xl md:text-4xl font-bold text-white mb-2'>Welcome Back</h1>
                    <p className='text-gray-400 text-sm'>Sign in to your account to continue</p>
                </div>
                <form onSubmit={submitHandler} className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-gray-300'>Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed'
                            placeholder="name@example.com"
                            type="email"
                        />
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-semibold text-gray-300'>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed'
                            placeholder='******'
                            type="password"
                        />
                    </div>
                    
                    <button 
                        disabled={loading}
                        className='w-full px-6 py-3 mt-2 rounded-lg bg-white text-black font-semibold cursor-pointer active:scale-95 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2'
                    >
                        {loading ? (
                            <>
                                <div className='w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin'></div>
                                <span>Signing in...</span>
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )}

export default Login;