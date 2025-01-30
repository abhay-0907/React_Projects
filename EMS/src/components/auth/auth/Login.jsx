import React, { useState } from 'react'

const Login = () => {
    function formSubmitHandler(e){
        e.preventDefault();
        console.log("Check");
        console.log(email);
        console.log(password);
        
        
        setEmail("");
        setPassword("");
    }
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
   return (<>
    <div className='flex items-center justify-center h-screen '>
        
        <div className='bg-transparent border-2 border-blue-400 rounded-xl shadow-xl font-sans '>
            <h1 className='text-2xl text-white  text-center  w-full h-16 p-3 rounded-t-xl font-semibold'>
                Login
            </h1>
        <form onSubmit={formSubmitHandler} className='flex p-6 flex-col text-xl'>


            <label className='text-white'>Email</label>
            <input type="email" placeholder='Enter email' className='p-2 mb-3 rounded-md  focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-600 drop-shadow-md placeholder:text-slate-400 text-start'
            
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            />


            <label className='text-white'>Password</label>

            <input type='password' placeholder='Enter password' className='p-2 mb-3 rounded-md   focus:outline-none focus:border-green-200 focus:ring-2 focus:ring-green-600 drop-shadow-md'
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value
                )
            }}
            />


            <a href="" className='ml-60 underline text-red-500 hover:drop-shadow-md'> Forgot?</a>
            <button className='bg-green-600 p-2 rounded-sm my-5 shadow-md shadow-green-700 text-white  hover:drop-shadow-md' >Login</button>
        </form>
        </div>
    </div>
    </> 
   )
}

export default Login