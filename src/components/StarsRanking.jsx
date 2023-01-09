import { IoStarHalf, IoStarOutline, IoStarSharp } from 'react-icons/io5';

const StarsRanking = ({ stars, numberStars }) => {
   return (
      <div className="flex items-center mt-2.5 mb-5">
         {
            stars?.map((star, id) => (star === 1) ?
               <IoStarSharp className='text-yellow-400 text-lg' key={id} />
               : (star === 0.5) ?
                  <IoStarHalf className='text-yellow-400 text-lg' key={id} />
                  : <IoStarOutline className='text-yellow-400 text-lg' key={id} />
            )
         }
         <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{numberStars}</span>
      </div>
   )
}

export default StarsRanking