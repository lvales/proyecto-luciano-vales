const Category = () => {
   return (
      <div className="p-4 max-w-3xl rounded-lg overflow-hidden shadow-lg inline-flex text-center bg-white text-slate-600 h-max">
         <a href='#/'>
            <img className="w-full p-3" src="./assets/img/cat-sm01.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
               <div className="font-bold text-xl">Hombre</div>
            </div>
         </a>
         <a href='#/'>
            <img className="w-full p-3" src="./assets/img/cat-sm02.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
               <div className="font-bold text-xl">Mujer</div>
            </div>
         </a>
         <a href='#/'>
            <img className="w-full p-3" src="./assets/img/cat-sm03.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
               <div className="font-bold text-xl">Kids</div>
            </div>
         </a>
      </div>
   )
}

export default Category