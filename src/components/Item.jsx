import { Link } from "react-router-dom";
import StarsRanking from "./StarsRanking";


const Item = ({ item }) => {

   const formatNumber = (number) => new Intl.NumberFormat().format(Math.round(number));
   return (
      <>
         <div className="my-5 mx-1 h-full w-full max-w-sm bg-white rounded-lg shadow-md ">
            <Link to={"/item/" + item.id}>
               <img className="p-3 mx-auto" src={item.photo_min} alt="product" />
            </Link>
            <div className="px-5 pb-5">
               <Link to={"/item/" + item.id}>
                  <h5 className="text-lg font-semibold tracking-tight text-gray-600 ">{item.title}</h5>
               </Link>
               <div className="flex items-center mt-2.5 mb-5">
               <StarsRanking stars={item.stars} numberStars={item.numberStars} />
               </div>
               <div className="text-lg line-through text-gray-400 font-semibold">${formatNumber(item.base_price)}</div>
               <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-600 ">${formatNumber(item.price)}</span>
                  <Link to={"/item/" + item.id} className="text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-red-200">Ver detalle</Link>
               </div>
            </div>
         </div>
      </>
   )
}

export default Item