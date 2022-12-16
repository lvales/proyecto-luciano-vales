import ItemList from "./ItemList";
import products from "../data/productsMl.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";

const ItemListContainer = ({ mensaje }) => {

   const [items, setItems] = useState([]);
   const { categoryId } = useParams();


   useEffect(() => {

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
      <>
         <Banner />
         <p className="mt-1 text-xl lg:text-5xl text-slate-600 text-center lg:p-10 lg:mt-48 font-bold">{mensaje}</p>
         <ItemList items={items} />
      </>
   );
}

export default ItemListContainer; 