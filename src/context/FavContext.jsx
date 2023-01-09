import { createContext, useState } from "react";

export const FavContext = createContext([]);

export const FavContextProvider = ({ children }) => {

   const [fav, setFav] = useState(false);


   const onFav = () => {
      // lista de favoritos
      const storageFav = JSON.parse(localStorage.getItem('favorites')) || [];
      (storageFav.length === 0) ? setFav(false) : setFav(true);
   }

   return (
      <FavContext.Provider value={{ onFav, fav }}>
         {children}
      </FavContext.Provider>
   );
}

export default FavContextProvider;