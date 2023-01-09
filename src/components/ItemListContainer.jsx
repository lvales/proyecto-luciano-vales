import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import { BounceLoader } from "react-spinners";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = ({ message, setBanner }) => {

   const [items, setItems] = useState([]);
   const { categoryId } = useParams();

   //? Carga de productos en Firebase
   useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const q = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
      getDocs(q).then((snapShot) => {
         setItems(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
   }, [categoryId]);

   return (
      <>
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
      </>
   );
}

export default ItemListContainer; 