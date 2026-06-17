import React, { useContext, useState } from 'react'
import Header from '../../other/Header';
import AdminList from '../TaskList/AdminList';
import { taskContext } from '../../context/TaskContext';
import Modal from '../Modal/Modal';
import { AuthContext } from '../../context/AuthContext';

const AdminDashboard = () => {

    const {employees, setEmployees} = useContext(taskContext);
    const [isOpen, setIsOpen] = useState(false);
    const {user, setUser} = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();

        const assignedTo = e.target.assign.value;

        const newTask = {
            active: true,
            completed: false,
            failed: false,
            newTask: true,
            taskTitle: e.target.title.value,
            priority: e.target.priority.value,
            taskDescription: e.target.description.value,
            taskDate: e.target.date.value,
            category: e.target.category.value,
        };

        const employeesTemp = structuredClone(employees);

        employeesTemp.forEach((employee) => {
            if (employee.firstName === assignedTo) {
                employee.tasks.push(newTask);

                employee.taskCounts.active += 1;
                employee.taskCounts.newTask += 1;
            }
        });

        setEmployees(employeesTemp);
        localStorage.setItem("employees", JSON.stringify(employeesTemp));

        e.target.reset();
    };

  return (
    <div className='min-h-screen px-4 md:px-8 py-8 font-mono bg-linear-to-br from-cyan-400/40 via-blue-500/40 to-purple-500/35 '>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Create Task Section */}
        <div className='my-8'>
            <div className='bg-black/25 rounded-2xl shadow-2xl p-8 border border-gray-700'>
                <div className='flex items-center gap-3 mb-8'>
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                    </svg>
                    <h1 className='text-3xl font-bold text-white'>Create New Task</h1>
                </div>

                <form action="" onSubmit={submitHandler} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Task Title */}
                    <div className='md:col-span-2 flex flex-col'>
                        <label className='font-semibold text-gray-300 mb-2' htmlFor="title">Task Title</label>
                        <input required className='w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition' placeholder='Enter task title' id='title' name='title' type="text" />
                    </div>

                    {/* Priority */}
                    <div className='flex flex-col'>
                        <label className='font-semibold text-gray-300 mb-2' htmlFor="priority">Priority Level</label>
                        <select required name="priority" className='w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition cursor-pointer' id="priority">
                            <option value="" disabled>Select Priority</option>
                            <option value="Low">Low Priority</option>
                            <option value="Medium">Medium Priority</option>
                            <option value="High">High Priority</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div className='flex flex-col'>
                        <label className='font-semibold text-gray-300 mb-2' htmlFor="category">Category</label>
                        <input required className='w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition' placeholder='e.g., Development, Design, Testing' id='category' name="category" type="text" />
                    </div>

                    {/* Date */}
                    <div className='flex flex-col'>
                        <label className='font-semibold text-gray-300 mb-2' htmlFor="date">Due Date</label>
                        <input required className='w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition' name='date' id='date' type="date" />
                    </div>

                    {/* Assign To */}
                    <div className='flex flex-col'>
                        <label className='font-semibold text-gray-300 mb-2' htmlFor="assign">Assign To Employee</label>
                        <select required className='w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition cursor-pointer' name="assign" id="assign">
                            <option value="" disabled>Select Employee</option>
                            {employees.map((employee) => (
                                <option key={employee.firstName} value={`${employee.firstName}`}>{employee.firstName}</option>
                            ))}
                        </select>
                    </div>

                    {/* Description */}
                    <div className='md:col-span-2 flex flex-col'>
                        <label className='font-semibold text-gray-300 mb-2' htmlFor="description">Task Description</label>
                        <textarea className='w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition resize-none' rows="4" name="description" placeholder='Provide detailed description of the task (max 500 words)' id="description"></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className='md:col-span-2 w-full px-6 py-3 rounded-lg bg-white text-black font-semibold cursor-pointer active:scale-95 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg transform'>
                        Create Task
                    </button>
                </form>
            </div>
        </div>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className='mt-12'>
            <div className='flex items-center gap-3 mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'/>
                    <path fillRule='evenodd' d='M4 5a2 2 0 012-2 1 1 0 000-2H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a1 1 0 100 2h1a1 1 0 100-2h-1V5a2 2 0 00-2-2 1 1 0 000 2h2v1H4z' clipRule='evenodd'/>
                </svg>
                <h2 className='font-bold text-2xl md:text-3xl text-white'>All Assigned Tasks</h2>
            </div>
            <div className='bg-gray-900 border border-gray-700 rounded-xl overflow-hidden'>
                <AdminList employees={employees}/>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard;