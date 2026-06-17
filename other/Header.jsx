import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import Spinner from '../components/Loading/Spinner';

const Header = ({isOpen, setIsOpen}) => {

  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  

  return (
    <div className='flex font-mono items-center justify-between bg-black/50 rounded-xl p-6 md:p-8 shadow-lg border border-gray-700 mb-6'>
        <div className='flex items-center gap-4'>
            <div className='bg-white p-3 rounded-lg'>
                <svg className='w-6 h-6 text-black' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
                </svg>
            </div>
            <div>
                <h2 className='font-medium text-gray-400 text-sm'>Welcome back,</h2>
                <h1 className='font-bold text-2xl md:text-3xl text-white'>{user?.firstName || 'User'}</h1>
            </div>
        </div>
        <div>
            <button 
                onClick={() => setIsOpen(true)}
                className='bg-red-600 text-white font-medium hover:bg-red-700 active:scale-95 cursor-pointer px-5 py-2.5 rounded-lg border border-red-700 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/50 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100'>
                Log Out
            </button>
        </div>
    </div>
  )
}

export default Header;