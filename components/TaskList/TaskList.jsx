import React from 'react'

const TaskList = (prop) => {
    console.log(prop);
  return (
    <div className='space-y-4 p-4 font-mono'>
        {prop.user.tasks.length === 0 ? (
            <div className='text-center py-12'>
                <svg className='w-16 h-16 text-gray-600 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                <p className='text-gray-400 font-medium'>No tasks assigned yet</p>
            </div>
        ) : (
            prop.user.tasks.map((task) => (
                <div key={task.taskTitle} className='bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 hover:shadow-lg transition duration-300 group'>
                    <div className='flex items-start justify-between gap-3 mb-4'>
                        <div className='flex-1'>
                            <h2 className='font-bold text-xl text-white group-hover:text-gray-200 transition'>{task.taskTitle}</h2>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1 ${
                            task.priority === "High" ? "bg-red-900 text-red-100 border border-red-700"
                                : task.priority === "Medium" ? "bg-yellow-900 text-yellow-100 border border-yellow-700"
                                    : "bg-green-900 text-green-100 border border-green-700"
                        }`}>
                            <span className={`w-2 h-2 rounded-full ${
                                task.priority === "High" ? "bg-red-400"
                                    : task.priority === "Medium" ? "bg-yellow-400"
                                        : "bg-green-400"
                            }`}></span>
                            {task.priority} Priority
                        </div>
                    </div>

                    <p className='text-gray-300 text-sm mb-4 line-clamp-2'>{task.taskDescription}</p>
                    <div className='flex items-center justify-between pt-4 border-t border-gray-700'>
                        <div className='flex items-center gap-2 text-gray-400 text-sm'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h12a1 1 0 100-2H6z' clipRule='evenodd' />
                            </svg>
                            <span>{task.taskDate}</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-400 text-sm'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                            </svg>
                            <span>{task.category}</span>
                        </div>
                    </div>
                </div>
            ))
        )}
    </div>
  )
}

export default TaskList;