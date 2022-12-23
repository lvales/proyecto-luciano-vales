import '../data/clothesColors.css'; 

const DetailSizeColor = ({ sizes, colors }) => {

   return (
      <>
         <div className="flex my-5">
            <p className="w-1/2">Talles:</p>
            <p className="w-1/2">Colores:</p>
         </div >
         <div className="flex">
            <div className="flex w-1/2">
               {
                  sizes?.map((size, id) => {
                     return (
                        <button className="border border-slate-800 rounded-md w-9 text-center m-1 uppercase inline-block align-middle hover:border-red-400 hover:bg-red-400 hover:text-white active:border-red-400 selection:bg-red-400" key={id}>
                           {size}
                        </button>
                     );
                  })
               }
            </div>
            <div className="flex w-1/2">
               {
                  colors?.map((color, id) => {
                     const style = "mr-2 border-2 border-slate-400 rounded-full p-4 " + color;
                     return (
                        <div key={id} className={ style }></div>
                     );
                  })
               }
            </div>
         </div>
      </>
   )
}

export default DetailSizeColor