import React, { useContext, useState } from 'react'
import TaskList from '../TaskList/TaskList';
import Header from '../../other/Header';
import { AuthContext } from '../../context/AuthContext';
import Modal from '../Modal/Modal';
import { taskContext } from '../../context/TaskContext';

const EmployeeDashboard = () => {

    const {user, setUser} = useContext(AuthContext);
    const {employees, setEmployees} = useContext(taskContext);
    const [isOpen, setIsOpen] = useState(false);

    const employee = employees.find(
        emp => emp.id === Number(user.id)
    );
    
  return (
    <div className='min-h-screen px-4 md:px-8 py-8 flex flex-col gap-8 font-mono bg-linear-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/35 '>
        
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='backdrop-blur-lg bg-blue-800/40 border border-white/20 rounded-2xl shadow-lg shadow-blue-500/20 p-6 hover:border-gray-600 hover:shadow-lg transition duration-300 group'>
                <div className='flex items-start justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm font-medium mb-1'>New Tasks</p>
                        <h1 className='font-bold text-4xl md:text-5xl text-white'>{employee.taskCounts.newTask || 0}</h1>
                    </div>
                    <div className='bg-gray-800 p-3 rounded-lg group-hover:bg-gray-700 transition'>
                        <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                            <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'/>
                            <path fillRule='evenodd' d='M4 5a2 2 0 012-2 1 1 0 000-2H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a1 1 0 100 2h1a1 1 0 100-2h-1V5a2 2 0 00-2-2 1 1 0 000 2h2v1H4z' clipRule='evenodd'/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='backdrop-blur-lg bg-green-600/40 border border-white/20 rounded-2xl shadow-lg shadow-green-500/20 p-6 hover:border-gray-600 hover:shadow-lg transition duration-300 group'>
                <div className='flex items-start justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm font-medium mb-1'>Completed</p>
                        <h1 className='font-bold text-4xl md:text-5xl text-white'>{employee.taskCounts.completed || 0}</h1>
                    </div>
                    <div className='bg-gray-800 p-3 rounded-lg group-hover:bg-gray-700 transition'>
                        <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='backdrop-blur-lg bg-orange-400/40 border border-white/20 rounded-2xl shadow-lg shadow-orange-500/20 p-6 hover:border-gray-600 hover:shadow-lg transition duration-300 group'>
                <div className='flex items-start justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm font-medium mb-1'>Active Tasks</p>
                        <h1 className='font-bold text-4xl md:text-5xl text-white'>{employee.taskCounts.active}</h1>
                    </div>
                    <div className='bg-gray-800 p-3 rounded-lg group-hover:bg-gray-700 transition'>
                        <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z' clipRule='evenodd'/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='backdrop-blur-lg bg-red-500/40 border border-white/20 rounded-2xl shadow-lg shadow-red-500/20 p-6 hover:border-gray-600 hover:shadow-lg transition duration-300 group'>
                <div className='flex items-start justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm font-medium mb-1'>Failed Tasks</p>
                        <h1 className='font-bold text-4xl md:text-5xl text-white'>{employee.taskCounts.failed}</h1>
                    </div>
                    <div className='bg-gray-800 p-3 rounded-lg group-hover:bg-gray-700 transition'>
                        <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M13.477 14.89A6 6 0 015.11 2.524a6 6 0 018.367 8.366L13.477 14.89zm1.414-1.414L15.414 13a6 6 0 10-8.485-8.485l1.06 1.061a4 4 0 015.929 5.929z' clipRule='evenodd'/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className='mt-6'>
            <div className='flex items-center gap-3 mb-6'>
                <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'/>
                    <path fillRule='evenodd' d='M4 5a2 2 0 012-2 1 1 0 000-2H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a1 1 0 100 2h1a1 1 0 100-2h-1V5a2 2 0 00-2-2 1 1 0 000 2h2v1H4z' clipRule='evenodd'/>
                </svg>
                <h2 className='font-bold text-2xl md:text-3xl text-white'>Assigned Tasks</h2>
            </div>
            <div className='bg-gray-900 border border-gray-700 rounded-xl p-1'>
                <TaskList user={employee} />
            </div>
        </div>
    </div>
  )
}

export default EmployeeDashboard;