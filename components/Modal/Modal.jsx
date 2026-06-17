import React, { useContext } from 'react'
import warningImg from '../../src/assets/warning.svg'
import { AuthContext } from '../../context/AuthContext'

const Modal = ({isOpen, setIsOpen}) => {

  const {user, setUser} = useContext(AuthContext);

  const logOutHandler = () => {
    setIsOpen(false);
    setUser(null);
    localStorage.removeItem("loggedInUser");
  }
  
  return (
    <div className={`${isOpen ? "flex" : "hidden"} bg-black/30 backdrop-blur-[5px] fixed inset-0 px-10 items-center justify-center`}>
        <div className='bg-gray-800 p-5 rounded-xl'>
          <div className='flex items-center text-3xl gap-3 font-bold text-red-500 mb-5'>
            <img className='size-10' src={warningImg} alt="" />
            <h1>Log Out</h1>
          </div>
          <h2>Do you really want to exit the app?</h2>

          <div className='flex justify-around mt-8 *:cursor-pointer *:active:scale-95 *:transition'>
            <button onClick={() => setIsOpen(false)}
              className='bg-white text-black py-2 px-4 rounded-lg'>Cancel</button>
            <button onClick={logOutHandler} className='bg-red-500 py-2 px-4 rounded-lg'>Yes</button>
          </div>
        </div>
    </div>
  )
}

export default Modal;