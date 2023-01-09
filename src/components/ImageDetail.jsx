import React, { useState } from 'react'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const ImageDetail = ({ photos }) => {

   const [index, setIndex] = useState(0);

   const nextClick = () => (index < photos.length - 1) ? setIndex(index + 1) : setIndex(0);

   const backClick = () => (index > 0) ? setIndex(index - 1) : setIndex(photos.length - 1);

   return (
      <div className='flex'>
         <button className="text-2xl text-slate-300 lg:px-20" onClick={backClick}><MdOutlineArrowBackIosNew /></button>
         <img src={photos?.[index]} alt="Imagen" className="p-3 mx-auto mb-5 max-w-full h-auto" />
         <button className="text-2xl text-slate-300 lg:px-20" onClick={nextClick}><MdOutlineArrowForwardIos /></button>
      </div>
   )
}

export default ImageDetail