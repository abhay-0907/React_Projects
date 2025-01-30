import React from 'react'

export const EmployeeDashboardHeader = () => {
  return (
    <>
    <div className='flex items-end justify-between '>
            <div>
                <h1 className='text-2xl'>
                    Hello,
                    <br/>
                    <span className='font-bold text-3xl text-red-00 '>
                        Abhay
                    </span>
                </h1>
            </div>
            <div>
                <button className='px-4 py-2 font-bold bg-red-500 rounded-md 
                 hover:bg-transparent border-red-500 border-2 drop-shadow-lg'>
                    Log Out 
                </button>
            </div>
        </div>
    </>
  )
}
