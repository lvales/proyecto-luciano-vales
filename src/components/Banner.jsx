import Category from "./Category"

const Banner = () => {

   return (
      <>
         <div className="lg:px-5 bg_banner">
            <div className="lg:flex justify-between items-center">
               <img className="block w-2/4 2xl:w-1/2 lg:order-2 flex-shrink-0" src="/assets/img/banner.jpg" alt="banner" />
               <div className="relative mx-auto py-5 px-4 lg:mb-5 lg:order-1">
                  <div className="lg:pb-5 lg:mb-5 text-center lg:text-start lg:flex-nowrap">
                     <h3 className="font-light text-2xl lg:text-3xl xl:text-4xl pb-1 text-white">¡Apurate! Oferta por tiempo limitado.</h3>
                     <h2 className="text-4xl xl:text-6xl font-semibold text-white mt-3">Rebajas en ropa deportiva</h2>
                     <p className="text-xl xl:text-2xl font-normal text-white mt-3">Zapatillas, keds, remeras y mucho más...</p>
                  </div>
               </div>
            </div>
            {/* <div className="absolute invisible xl:visible xl:mb-96 2xl:mb-32 2xl:bottom-1 left-1/4"> */}
         </div>
         <div className="container relative -mt-32 2xl:-mt-48 pt-3 invisible lg:visible">
            <Category />
         </div>
      </>
   )
}

export default Banner