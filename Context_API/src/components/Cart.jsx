import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const cart = useContext(CartContext);
    const total = cart.item.reduce((a, b) => a + b.price, 0)
    console.log("total", total);
    return (
        <div className='w-[50%] mt-4'>
            <h1 className='mt-2 mb-2'>Cart</h1>
            <hr />
            <ul className='m-4 p-2 font-medium'>
                {cart && cart.item.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>

            <h4 className='font-bold'>Total Bill: {total}</h4>
        </div>
    );
};

export default Cart;
