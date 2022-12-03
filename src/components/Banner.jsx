import Category from "./Category"

const Banner = () => {
   return (
      <>
         <div className="grid grid-cols-11 bg_banner mb-32">
            <div className="col-span-6 mx-auto my-auto">
               <div className="text-4xl font-normal text-white">¡Apurate! Oferta por tiempo limitado.</div>
               <div className="text-7xl font-semibold text-white mt-3">Rebajas en ropa deportiva</div>
               <div className="text-2xl font-normal text-white mt-3">Zapatillas, keds, remeras y muccho más...</div>
            </div>
            <div className="col-span-5">
               <img src="../assets/img/banner.jpg" alt="banner" />
            </div>
         </div>
         <div className="absolute bottom-32 left-1/4">
            <Category />
         </div>
      </>
   )
}

export default Banner