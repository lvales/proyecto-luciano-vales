import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/productsMl.json";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

   const [item, setItem] = useState({});
   const { itemId } = useParams();

   // useEffect(() => {
   //    const getProduct = new Promise((resolve) => {
   //       setTimeout(() => {
   //          resolve(products.find((item) => item.id === itemId));
   //       });
   //    });

   //    getProduct.then((result) => {
   //       setItem(result);
   //    }, [itemId]);

   // });

   useEffect(() => {
      const db = getFirestore();
      const itemCollection = doc(db, "items", itemId);
      getDoc(itemCollection).then ((doc) => {
         if (!doc.exists()) {
            console.log("No such document!");
         } 
         setItem({id:doc.id, ...doc.data()});
      })
   }, [itemId]);
      

   return (
      <ItemDetail item={item} />
   )
}

export default ItemDetailContainer