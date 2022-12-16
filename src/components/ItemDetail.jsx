import ItemCount from "./ItemCount";
import StarsRanking from "./StarsRanking";

const ItemDetail = ({ item }) => {

   const formatNumber = (number) => new Intl.NumberFormat().format(Math.round(number));

   return (
      <>
         <div className='relative w-full bg-slate-800 text-white text-3xl py-20 px-40'>
            <p className="mb-10">{item.title}</p>
         </div>
         <div className="relative -mt-20 mb-20 p-5 mx-auto h-full w-full max-w-4xl bg-white rounded-lg shadow-md ">

            <img className="p-3 mx-auto mb-5" src={item.photo} alt="product" />

            <div className="px-5 pb-5">

               <h5 className="text-xl font-semibold tracking-tight text-gray-600 ">{item.title}</h5>

               <div className="flex items-center mt-2.5 mb-5">
                  <StarsRanking stars={item.stars} numberStars={item.numberStars} />
               </div>
               <p>{item.description}</p>
                  <p className="mt-5">Talles:</p>
               <div className="flex">
                  {
                     item.sizes?.map((size, id)=>{
                        return(
                           <button className="border border-slate-800 rounded-md w-9 text-center m-1 uppercase inline-block align-middle hover:border-red-300 hover:bg-red-300 hover:text-white" key={id}>
                              {size}
                           </button>
                        );
                     })
                  }
               </div>
               <div className="flex mt-3 items-center justify-around">
                  <div className="flex flex-col text-center">
                     <span className="text-gray-400 text-md">Antes <span className="text-lg line-through font-bold text-gray-400">${formatNumber(item.base_price)}</span></span>
                     <span className="text-3xl font-bold text-gray-600 ">${formatNumber(item.price)}</span>
                  </div >
                  <ItemCount initialStock={item.stock} />
                  {/* <Link to="#" className="text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-red-200">Agregar al carrito</Link> */}
               </div>
            </div>
         </div>
      </>
   )
}

export default ItemDetail