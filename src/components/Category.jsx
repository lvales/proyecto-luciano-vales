const Category = () => {
   return (
      <section className="container p-3 mx-auto relative pt-3 lg:pt-0 pb-5 lg:-mb-12">
         <div className="p-4 max-w-3xl rounded-lg overflow-hidden shadow-lg inline-flex text-center bg-white text-slate-600 h-max">
            <a href='#/'>
               <img className="p-3" src="./assets/img/cat-sm01.jpg" alt="Hombre" />
               <div className="mt-2">
                  <div className="font-bold text-xl">Hombre</div>
               </div>
            </a>
            <a href='#/'>
               <img className="p-3" src="./assets/img/cat-sm02.jpg" alt="Mujer" />
               <div className="mt-2">
                  <div className="font-bold text-xl">Mujer</div>
               </div>
            </a>
            <a href='#/'>
               <img className="p-3" src="./assets/img/cat-sm03.jpg" alt="Kids" />
               <div className="mt-2">
                  <div className="font-bold text-xl">Kids</div>
               </div>
            </a>
         </div>
      </section>
   )
}

export default Category