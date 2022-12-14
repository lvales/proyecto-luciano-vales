import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/productsMl.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

   const [item, setItem] = useState({});
   const {itemId} = useParams();

   useEffect(() => {
      const getProduct = new Promise((resolve) => {
         setTimeout(() => {
            resolve(products.find((item) => item.id === itemId));
         });
      });

      getProduct.then((result) => {
         setItem(result);        
      },[itemId]);

   });
   
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer