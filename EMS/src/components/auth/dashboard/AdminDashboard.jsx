import React from 'react'

const AdminDashboard = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-[#1c1c1c] h-screen '>
        <div className=''>
           <h1 className='text-white font-bold text-3xl text-center p-2'>
            Admin
           </h1>
        </div>
        <div>
            <form>
                <h2>
                    Create Task
                </h2>
                <label> Task Title</label>
                <input type='text' placeholder='Enter task'/>

                <label htmlFor="">Description</label>
                <textarea cols={20} rows={4}/>
            </form>
        </div>
    </div>
    
    </>
  )
}

export default AdminDashboard