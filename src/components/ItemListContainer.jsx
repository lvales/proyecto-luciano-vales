import ItemList from "./ItemList";
import products from "../data/productsMl.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";

const ItemListContainer = ({ message }) => {

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
         <ItemList items={items} message={message}/>
      </>
   );
}

export default ItemListContainer; 