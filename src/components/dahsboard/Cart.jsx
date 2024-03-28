import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { removeItem } from '../../features/cartSlice';

const Cart = () => {
  const {cart,totalPrice}=useSelector((state)=>state.allCart);
  const dispatch =useDispatch();
  
  return (
    <div className=' px-3 py-3 font-varela text-indigo-500'>
    {
      cart.map((data)=>{
        return(
          <div className=' flex justify-between items-center text-md px-4
          bg-gray-200 bg-opacity-40 rounded-2xl my-1' key={data.id}>
            <img src={data.image} alt="items" className=' h-16'/>
            <h1 className=' w-36'>{data.name}</h1>
            <h1>Price: {data.price}$</h1>
            <button className=' bg-red-700 text-white rounded-md py-1 px-2' 
            onClick={()=>dispatch(removeItem(data.id))}>
            Remove</button>
          </div>
        )
      })
    }
     <section className=' mt-4 flex text-center items-center justify-between'>
     <button className=' bg-green-500 text-white py-1 px-1 rounded-md'>CheckOut</button>
     <h1>Total Price:{totalPrice}</h1>
    </section>
     
    </div>
  )
}

export default Cart
