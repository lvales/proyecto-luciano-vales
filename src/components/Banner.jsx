import Category from "./Category"

const Banner = () => {
   return (
      <div className="flex justify-between bg_banner mb-32">
         <div className="relative mx-auto my-auto">
            <div className="ml-20">
               <div className="text-4xl font-normal text-white">¡Apurate! Oferta por tiempo limitado.</div>
               <div className="text-7xl font-semibold text-white mt-3">Rebajas en ropa deportiva</div>
               <div className="text-2xl font-normal text-white mt-3">Zapatillas, keds, remeras y muccho más...</div>
            </div>
         </div>
         <div className="absolute bottom-32 left-1/4">
            <Category />
         </div>
         <img src="../assets/img/banner.jpg" alt="banner" />
      </div>
   )
}

export default Banner