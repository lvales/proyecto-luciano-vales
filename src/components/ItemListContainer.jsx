import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "../data/productsMl.json";
import { useEffect, useState } from "react";

const ItemListContainer = ({ mensaje }) => {

   const [items, setItems] = useState([]);

   useEffect(() => {
      const getProducts = new Promise((resolve) => {
         setTimeout(() => {
            resolve(products);
         }, 2000);
      });
      getProducts.then((result) => {
         setItems(result);
      });
   }, []);

   return (
      <>
         <p className="mt-10 text-xl lg:text-5xl text-slate-600 text-center lg:p-10 lg:mt-48 font-bold">{mensaje}</p>
         <ItemList items={items}/>
         <ItemCount InitialStock={10} />
      </>
   );
}

export default ItemListContainer; 