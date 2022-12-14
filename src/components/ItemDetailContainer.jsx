import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

   const [item, setItem] = useState({});
   const { itemId } = useParams();

   useEffect(() => {
      const db = getFirestore();
      const itemCollection = doc(db, "items", itemId);
      getDoc(itemCollection).then((doc) => {
         if (!doc.exists()) {
            console.log("No existe documento!");
         }
         setItem({ id: doc.id, ...doc.data() });
      })
   }, [itemId]);


   return (
      <ItemDetail item={item} />
   )
}

export default ItemDetailContainer