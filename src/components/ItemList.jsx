import Item from './Item'

const ItemList = ({ items }) => {
   return (
      <div className='container mx-auto '>
         <div className="flex flex-wrap items-center justify-around ">
            {
               items.map((item) =>
                  <Item key={item.id} item={item} />
               )
            }
         </div>
      </div>
   )
}

export default ItemList