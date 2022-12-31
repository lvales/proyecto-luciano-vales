import ItemList from "./ItemList";
import products from "../data/productsMl.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";

const ItemListContainer = ({ message, banner }) => {

   const [items, setItems] = useState([]);
   const { categoryId } = useParams();

   useEffect(() => {
      const getProducts = Promise((resolve) => {
         setTimeout(() => {
            resolve(categoryId ? products.filter((product) => product.category === categoryId) : products);
         }, 2000);
      });

      getProducts.then((result) => {
         setItems(result);
      });

   }, [categoryId]);

   return (
      <div className="">
         {(banner === true) ? <Banner /> : null}
         <ItemList items={items} message={message}/>
      </div>
   );
}

export default ItemListContainer; 