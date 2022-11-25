import { BsCart2 } from 'react-icons/bs';

const CartWidget = ({ cantCart }) => {
   return (
      <div className="flex">
         <div className="flex relative">
            <div className="text-slate-900 font-semibold hover:text-slate-400 ">
               <BsCart2 className='text-2xl' />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 rounded-full h-4 w-4 font-medium text-xs text-center text-slate-100"><p>{cantCart}</p></div>
         </div>
      </div>
   )
}

export default CartWidget