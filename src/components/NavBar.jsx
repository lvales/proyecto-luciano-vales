import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { FavContext } from "../context/FavContext";
import { useContext } from "react";
import { useEffect } from "react";


const NavBar = () => {

   const { fav, onFav } = useContext(FavContext);

   useEffect(() => {
      onFav();
   }, [])

   return (
      <div className="p-5 border-b shadow-sm bg-white text-slate-700">
         <div className="container mx-auto flex justify-between items-centerbg-slate-200">
            <div className="flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <Link className="text-3xl font-black text-slate-700" to={"/"}><span className="text-red-600 text-4xl">.</span>Shop</Link>
            </div>
            <nav className="flex gap-5 items-center text-lg font-medium">
               <NavLink to={"category/hombre"} className="hover:text-slate-500 active:text-sky-700">Hombre</NavLink>
               <NavLink to={"category/mujer"} className="hover:text-slate-500 active:text-sky-700">Mujer</NavLink>
               <NavLink to={"category/kids"} className="hover:text-slate-500 active:text-sky-700">Niños</NavLink>
               <NavLink to={"favorite"} className="hover:text-slate-500 active:text-sky-700">
                  <div className='flex flex-row items-center'>
                     {(fav === false)
                        ? <div><IoHeartOutline /></div>
                        : <div className="text-red-400"><IoHeart /></div>
                     }
                     <div>Favoritos</div>
                  </div></NavLink>
               <CartWidget cantCart='3' />
            </nav>
         </div>
      </div >
   )
}

export default NavBar