import React from 'react'

const EmployeeTask = () => {
  return (
    <>
    <div className='flex gap-3 mt-10'>

    
    <div className='bg-green-500 rounded-xl w-[25%] py-12 px-6 flex flex-col hover:bg-transparent border-green-500 border-2 cursor-pointer'>
        <span className='font-bold text-3xl'>
            0
        </span>
        <span className='font-bold text-3xl'>
            New Task
        </span>
    </div>

    <div className='bg-yellow-500 rounded-xl w-[25%] py-12 px-6 flex flex-col hover:bg-transparent border-yellow-500 border-2 cursor-pointer'>
        <span className='font-bold text-3xl'>
            0
        </span>
        <span className='font-bold text-3xl'>
            New Task
        </span>
    </div>

    <div className='bg-red-500 rounded-xl w-[25%] py-12 px-6 flex flex-col hover:bg-transparent border-red-500 border-2 cursor-pointer'>
        <span className='font-bold text-3xl'>
            0
        </span>
        <span className='font-bold text-3xl'>
            New Task
        </span>
    </div>

    <div className='bg-blue-500 rounded-xl w-[25%] py-12 px-6 flex flex-col hover:bg-transparent border-blue-500 border-2 cursor-pointer'>
        <span className='font-bold text-3xl'>
            0
        </span>
        <span className='font-bold text-3xl'>
            New Task
        </span>
    </div>
    </div>
    </>
  )
}

export default EmployeeTask