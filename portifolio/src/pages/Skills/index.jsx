//Css
import style from './Skills.module.css';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {


   return (
      <section className={`${style.skills} d-flex align-items-center justify-content-center`}>
         <div className={`${style.conteudo}`}>
            <h1 className='text-center mb-5'>Habilidades</h1>

            <div className={`${style.icons} row g-3 g-lg-5 text-center`}>

               <div className={` ${style.icon} col-4 col-sm-4 col-lg-3`} title='HTML'>
                  <FontAwesomeIcon icon={faHtml5} className={`${style.fa}`}/>
               </div>
               

               <div className={` ${style.icon} col-4 col-sm-4 col-lg-3`} title='CSS'>
                  <FontAwesomeIcon icon={faCss3} className={`${style.fa}`}/>
               </div>

               <div className={` ${style.icon} col-4 col-sm-4 col-lg-3`} title='JavaScript'>
                  <FontAwesomeIcon icon={faJs} className={`${style.fa}`}/>
               </div>

               <div className={` ${style.icon} col-4 col-sm-4 col-lg-3`} title='React'>
                  <FontAwesomeIcon icon={faReact} className={`${style.fa}`}/>
               </div>

               <div className={` ${style.icon} col-4 col-sm-4 col-lg-3`} title='Bootstrap'>
                  <FontAwesomeIcon icon={faBootstrap} className={`${style.fa} col-4 col-sm-4 col-lg-3`}/>
               </div>

               <div className={` ${style.icon} col-4 col-sm-4 col-lg-3`} title='Git'>
                  <FontAwesomeIcon icon={faGit} className={`${style.fa}`}/>
               </div>

               <div className={` ${style.icon} col-4 col-sm-4 col-lg-3`} title='GitHub'>
                  <FontAwesomeIcon icon={faGithub} className={`${style.fa}`}/>
               </div>

            </div>
         </div>
      </section>
   )
};