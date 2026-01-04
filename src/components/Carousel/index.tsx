import { useState } from "react";

import style from './Carousel.module.css';

type Props = {
   images: string[];
   alt: string;
};

export const Carousel = ({ images, alt }: Props) => {
   const [current, setCurrent] = useState(0);

   const next = () => setCurrent(p => (p+1) % images.length);
   const prev = () => setCurrent(p => (p-1 + images.length) % images.length);
   
   return (
      <div className={`${style.carousel}`}>
         <button onClick={prev}>{'<'}</button>
         <div className={`${style.card_img}`}>
            <img src={images[current]} alt={alt} />
         </div>
         <button onClick={next}>{'>'}</button>
      </div>
   );
};