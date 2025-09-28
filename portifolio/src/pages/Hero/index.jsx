//Css
import style from './Hero.module.css';

export const Hero = () => {


   return (
      <section className={`${style.hero} d-flex flex-column align-items-center justify-content-center`}>
         <div className={` ${style.img_hero} d-flex align-items-center justify-content-center mb-3`}>
            <div className={`${style.img}`}></div>
         </div>
         <div className={`${style.text}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius voluptate modi beatae dolorum, unde ratione exercitationem alias dignissimos ullam quod eligendi sunt distinctio vitae id reiciendis, officia nam inventore.</p>
         </div>
      </section>
   )
};