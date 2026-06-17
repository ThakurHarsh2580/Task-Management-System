import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { taskContext } from '../../context/TaskContext';

const AdminList = (prop) => {
    
    const employees = prop.employees;
    const totalTasks = employees.reduce((sum, emp) => sum + emp.tasks.length, 0);

  return (
    <div className='font-mono flex flex-col'>
        <div className='bg-gray-800 border-b border-gray-700 p-4 md:p-6 grid grid-cols-3 gap-4 md:gap-8'>
            <h3 className='font-bold text-white text-sm md:text-base flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' />
                </svg>
                Employee
            </h3>
            <h3 className='font-bold text-white text-sm md:text-base flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M4 4a2 2 0 00-2 2v4a1 1 0 001 1h12a1 1 0 001-1V6a2 2 0 00-2-2H4zm0 5a1 1 0 011-1h6a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1z' clipRule='evenodd' />
                </svg>
                Task
            </h3>
            <h3 className='font-bold text-white text-sm md:text-base flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                Status
            </h3>
        </div>
        <div className='divide-y divide-gray-700'>
            {totalTasks === 0 ? (
                <div className='p-8 text-center'>
                    <svg className='w-16 h-16 text-gray-600 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' />
                    </svg>
                    <p className='text-gray-400 font-medium'>No tasks assigned yet</p>
                </div>
            ) : (
                employees.map((employee) => (
                    employee.tasks.map((task, idx) => (
                        <div key={`${employee.firstName}-${idx}`} className='p-4 md:p-6 grid grid-cols-3 gap-4 md:gap-8 items-center hover:bg-gray-800 transition duration-200 group'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black font-semibold text-sm shrink-0'>
                                    {employee.firstName.charAt(0).toUpperCase()}
                                </div>
                                <span className='text-white font-medium text-sm md:text-base group-hover:text-gray-200 transition'>{employee.firstName}</span>
                            </div>
                            <div className='text-gray-300 text-sm md:text-base truncate group-hover:text-white transition'>
                                {task.taskTitle}
                            </div>
                            <div className='flex justify-start'>
                                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1 ${
                                    task.active ? "bg-blue-900 text-blue-100 border border-blue-700"
                                        : task.completed ? "bg-green-900 text-green-100 border border-green-700" 
                                        : "bg-red-900 text-red-100 border border-red-700"
                                }`}>
                                    <span className={`w-2 h-2 rounded-full ${
                                        task.active ? "bg-blue-400"
                                            : task.completed ? "bg-green-400" 
                                            : "bg-red-400"
                                    }`}></span>
                                    {task.active ? "Active" :
                                        task.completed ? "Completed" : "Failed"}
                                </span>
                            </div>
                        </div>
                    ))
                ))
            )}
        </div>
        {totalTasks > 0 && (
            <div className='bg-black/20 border-t border-gray-700 p-4 md:p-6 grid grid-cols-3 gap-4 md:gap-8 text-sm text-gray-300'>
                <div>Total Employees: <span className='font-bold text-white'>{employees.length}</span></div>
                <div>Total Tasks: <span className='font-bold text-white'>{totalTasks}</span></div>
                <div>Avg Tasks/Employee: <span className='font-bold text-white'>{(totalTasks / employees.length).toFixed(1)}</span></div>
            </div>
        )}
    </div>
  )
}

export default AdminList;