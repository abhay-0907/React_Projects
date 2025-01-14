import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Item = (props) => {

    const cart=useContext(CartContext);
    console.log(cart);
    
  return (
    <>
    <div className='flex  items-center justify-around w-[50%] '>
        <div className='flex gap-4 justify-start'>


        <h4>
            Product : {props.name}
        </h4>

        <h5>
            Price : {props.price}
        </h5>
        </div>
    <div>

        <button onClick={()=>{
            cart.setItem([...cart.item,{name:props.name, price:props.price}])
        }}>
            Add to Cart
        </button>
    </div>
    </div>
    </>
)
}

export default Item