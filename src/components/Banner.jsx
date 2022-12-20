import Category from "./Category"

const Banner = () => {

   return (
      <>
         <div className="lg:px-5 bg_banner">
            <div className="lg:flex justify-between items-center">
               <img className="block w-2/4 2xl:w-1/2 lg:order-2 flex-shrink-0" src="/assets/img/banner.jpg" alt="banner" />
               <div className="relative mx-auto py-5 px-4 lg:mb-5 lg:order-1">
                  <div className="lg:pb-5 lg:mb-5 text-center lg:text-start lg:flex-nowrap">
                     <h3 className="font-light lg:text-4xl pb-1 text-white">¡Apurate! Oferta por tiempo limitado.</h3>
                     <h2 className="text-xl xl:text-6xl font-semibold text-white mt-3">Rebajas en ropa deportiva</h2>
                     <p className="text-xl xl:text-2xl font-normal text-white mt-3">Zapatillas, keds, remeras y mucho más...</p>
                  </div>
               </div>
            </div>
            <div className="xl:absolute xl:bottom-1 left-1/4">
               {/* <Category /> */}
            </div>
         </div>
      </>
   )
}

export default Banner