import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CartWidget = () => {

   const { getTotalItems } = useContext(CartContext);

   return (
      <div className="flex">
         <div className="flex relative">
            <Link to={'/cart'} className="text-slate-900 font-semibold hover:text-slate-400 ">
               <IoBagHandleOutline className='text-2xl' />
            </Link>
            <div className="absolute -top-2 -right-2 bg-red-500 rounded-full h-4 w-4 font-medium text-xs text-center text-slate-100"><p>{getTotalItems()}</p></div>
         </div>
      </div>
   )
}

export default CartWidget