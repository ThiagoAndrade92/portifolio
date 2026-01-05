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
      <>
         {/* ============== MOBILE ================ */}
         <div className={`${style.modalMobile} d-sm-none`}
            onClick={onClose}
         >
            <div className={`${style.carouselMobile}`}>
               <div
                  className={`${style.card_imgMobile}`}>
                  <img src={project.images[current]} alt={project.alt} />
               </div>
               <div className={`${style.btnsMobile}`}>
                  <button onClick={prev}>{'<'}</button>
                  <button onClick={next}>{'>'}</button>
               </div>
            </div>
         </div>
         {/* ============== DESKTOP ================ */}
         <div className={`${style.modal} d-none d-sm-block`}
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
      </>
   );
};