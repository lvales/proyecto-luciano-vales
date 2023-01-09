import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from "../context/FavContext";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTiktok, IoHeart, IoReceiptOutline } from 'react-icons/io5';

const FavList = () => {

   const { onFav } = useContext(FavContext);
   const [favorite, setFavorite] = useState(true);

   const formatNumber = (number) => new Intl.NumberFormat().format(Math.round(number));

   // lista de favoritos
   const fav = JSON.parse(localStorage.getItem('favorites')) || [];


   const removeFav = (id) => {
      const newFav = fav.filter(fav => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(newFav));
      setFavorite(!favorite);
      onFav();
   }


   return (
      <>
         <div className='relative justify-between flex w-full bg-slate-800 text-white text-3xl py-20 px-40'>
            <div>Favoritos</div>
            <div className="flex">
               <div className="mb-10 mx-2"><IoLogoInstagram /></div>
               <div className="mb-10 mx-2"><IoLogoFacebook /></div>
               <div className="mb-10 mx-2"><IoLogoTiktok /></div>
            </div>
         </div>
         {
            (fav.length === 0) ?
               <div className="relative -mt-20 mb-20 p-5 mx-auto h-full w-full max-w-4xl bg-white rounded-lg shadow-md ">
                  <div className='flex flex-col'>
                     <div className='text-6xl mx-auto my-10'><IoReceiptOutline /></div>
                     <p className='text-center font-semibold text-2xl'>No tienes favoritos aún...</p>
                  </div>
               </div>
               :
               <>
                  <div className="relative -mt-20 mb-20 p-5 mx-auto h-full w-full max-w-4xl bg-white rounded-lg shadow-md ">
                     <div>
                        <ul>
                           {
                              fav.map(item => (
                                 <div key={item.id} className="text-center px-5 lg:flex border-b mt-5 lg:mt-10 mb-3 lg:items-center lg:justify-between lg:gap-5">
                                    <Link to={`/item/${item.id}`}><img className="w-8 p-1 mx-auto" src={item.photo_min} alt="image_thumbnail" /></Link>
                                    <Link to={`/item/${item.id}`} className="text-lg lg:w-3/5 ml-3 lg:text-md">{item.title}</Link>
                                    <div className="my-5 lg:my-0 lg:w-1/5 lg:ml-3 text-lg lg:text-right font-medium">{"$ " + formatNumber(item.price)}</div>
                                    <button onClick={() => removeFav(item.id)}><IoHeart className="text-2xl text-red-400" /></button>
                                 </div>
                              ))
                           }
                        </ul>
                     </div>
                  </div>
               </>
         }
      </>
   )
}

export default FavList