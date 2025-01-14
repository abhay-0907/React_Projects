import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Button = () => {
    const context = useContext(CounterContext)
  return (
    <div>
        <button onClick={()=>{
          context.setCount(context.count + 1)
        }}>
            Add
        </button>
        <button onClick={()=>{
          context.setCount(context.count - 1)
        }}>
            Delete
        </button>
    </div>
  )
}

export default Button