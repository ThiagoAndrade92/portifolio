import { useState } from "react";

import style from './Modal.module.css';

type Props = {
   project: {
   images: string[];
   alt: string;
   title: string;
   };
   onClose: () => void;
};



export const Modal = ({ project, onClose }: Props) => {

   const [current, setCurrent] = useState(0);

   const next = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrent(p => (p + 1) % project.images.length);
   };
   const prev = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrent(p => (p - 1 + project.images.length) % project.images.length);
   };

   return (

      <div className={`${style.modal} position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}
         onClick={onClose}
      >
         <div className={`${style.carousel}`}>
            <button onClick={prev}>{'<'}</button>
            <div
               className={`${style.card_img}`}>
               <img src={project.images[current]} alt={project.alt} />
            </div>
            <button onClick={next}>{'>'}</button>
         </div>
      </div>
   );
};