import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ImageDetail from "./ImageDetail";
import ItemCount from "./ItemCount";
import StarsRanking from "./StarsRanking";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTiktok, IoHeartOutline, IoHeart } from 'react-icons/io5';
import DetailSizeColor from "./DetailSizeColor";

const ItemDetail = ({ item }) => {

   const [favorite, setFavorite] = useState(false);
   const { addItem } = useContext(CartContext);

   const onAdd = (quantity) => {
      addItem(item, quantity);
   }

   const addFav = () => {
      setFavorite(!favorite);
   }

   const formatNumber = (number) => new Intl.NumberFormat().format(Math.round(number));


   return (
      <>
         <div className='relative justify-between flex w-full bg-slate-800 text-white text-3xl py-20 px-40'>

            <div className="mb-10">{item.title}</div>

            <div className="flex">
               <div className="mb-10 mx-2"><IoLogoInstagram /></div>
               <div className="mb-10 mx-2"><IoLogoFacebook /></div>
               <div className="mb-10 mx-2"><IoLogoTiktok /></div>
            </div>

         </div>

         <div className="relative -mt-20 mb-20 p-5 mx-auto h-full w-full max-w-4xl bg-white rounded-lg shadow-md ">

            <div className="flex justify-end">
               <button onClick={addFav} className='mx-5 text-3xl'>
                  {
                     !favorite ? <IoHeartOutline /> : <IoHeart />
                  }
               </button>
            </div>


            <ImageDetail photos={item.photo} />

            <div className="px-5 pb-5">

               <h5 className="text-xl font-semibold tracking-tight text-gray-600 ">{item.title}</h5>

               <StarsRanking stars={item.stars} numberStars={item.numberStars} />

               <p>{item.description}</p>

               <DetailSizeColor sizes={item.sizes} colors={item.colors} />

               <div className="flex mt-3 items-center ">
                  <div className="flex flex-col w-1/2 pl-12">
                     <span className="text-gray-400 text-md">Antes <span className="text-lg line-through font-semibold text-gray-400">${formatNumber(item.base_price)}</span></span>
                     <span className="text-4xl font-bold text-gray-600 ">${formatNumber(item.price)}</span>
                  </div >

                  <div className="w-5/12">
                     <ItemCount stock={item.stock} sold={item.sold_quantity} onAdd={onAdd} />
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default ItemDetail