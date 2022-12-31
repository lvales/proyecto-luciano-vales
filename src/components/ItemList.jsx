import Item from './Item'

const ItemList = ({ items, message }) => {
   return (
      <>
         <p className="lg:mt-10 text-xl lg:text-5xl text-slate-600 text-center lg:p-10 font-bold">{message}</p>
         <div className='container mx-auto mb-40'>
            <div className="flex flex-wrap items-center justify-around ">
               {
                  items.map((item) =>
                     <Item key={item.id} item={item} />
                  )
               }
            </div>
         </div>
      </>
   )
}

export default ItemList