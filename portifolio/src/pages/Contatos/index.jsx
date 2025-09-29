//Css
import style from './Contatos.module.css';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDochub, faDocker, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArchive, faFile, faFileAlt, faFileArchive, faFileContract, faFileText, faFileWord } from '@fortawesome/free-solid-svg-icons';

export const Contatos = () => {



   return (
      <section className={`${style.contatos}`}>
         <h1>Contatos</h1>
         <div className={`${style.box_contatos} d-flex flex-column align-items-center justify-content-center`}>

            <a href="https://wa.me/5519992901698" target="_blank" className={`${style.contato} ${style.whatsapp}`}>
               <FontAwesomeIcon icon={faWhatsapp} className={`${style.icon}`}/>
               <span className={`${style.nome}`}>Whatsapp</span>
            </a>{/* whatsapp */}

            <a href='www.linkedin.com/in/thiago-silva-5581a41a2' target='_blank' className={`${style.contato} ${style.linkedin}`}>
               <FontAwesomeIcon icon={faLinkedin} className={`${style.icon}`}/>
               <span className={`${style.nome}`}>Likedin</span>
            </a>{/* likedin */}

            <a href='/vite.svg' download className={`${style.contato} ${style.curriculo}`}>
               <FontAwesomeIcon icon={faFileText} className={`${style.icon}`}/>
               <span className={`${style.nome}`}>Currículo</span>
            </a>{/* Currículo */}

         </div>
      </section>
   )
};