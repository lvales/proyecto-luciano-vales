import ItemList from "./ItemList";
import products from "../data/productsMl.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import { BounceLoader } from "react-spinners";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";

import {Animated} from "react-animated-css";

const ItemListContainer = ({ message, setBanner }) => {

   const [items, setItems] = useState([]);
   const { categoryId } = useParams();

   useEffect(() => {
      setItems([]);
      const getProducts = new Promise((resolve) => {
         setTimeout(() => {
            resolve(categoryId ? products.filter((product) => product.category === categoryId) : products);
         }, 2000);
      });

      getProducts.then((result) => {
         setItems(result);
      });

   }, [categoryId]);

   return (
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
         {(setBanner === true) ? <Banner /> :
            <>
               <div className='relative justify-between flex w-full bg-slate-800 text-white text-3xl py-20 px-40'>
                  <div className="mb-10">{message + " " + categoryId}</div>
                  <div className="flex">
                     <div className="mb-10 mx-2"><IoLogoInstagram /></div>
                     <div className="mb-10 mx-2"><IoLogoFacebook /></div>
                     <div className="mb-10 mx-2"><IoLogoTiktok /></div>
                  </div>

               </div>
            </>}
         {
            items.length === 0
               ?
               <div className="flex flex-col h-screen -mb-48">
                  <div className="mx-auto mt-36">
                     <BounceLoader
                        color="rgba(255, 125, 125, 1)"
                        size={100}
                     />
                  </div>
               </div>
               :

               <>
                  <ItemList items={items} />
               </>

         }
      </Animated>
   );
}

export default ItemListContainer; 