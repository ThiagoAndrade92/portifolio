//Css
import style from './Contatos.module.css';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';

export const Contatos = () => {



   return (
      <section className={`${style.contatos}`}>
         <h1>Contatos</h1>
         <div className={`${style.box_contatos} d-flex flex-column align-items-center justify-content-center`}>

            <a href="https://wa.me/5519992901698" target="_blank" className={`${style.contato} ${style.whatsapp}`}>
               <FontAwesomeIcon icon={faWhatsapp} className={`${style.icon}`}/>
               <span className={`${style.nome}`}>Whatsapp</span>
            </a>{/* whatsapp */}

            <a href='https://www.linkedin.com/in/thiago-silva-5581a41a2/' target='_blank' className={`${style.contato} ${style.linkedin}`}>
               <FontAwesomeIcon icon={faLinkedin} className={`${style.icon}`}/>
               <span className={`${style.nome}`}>Likedin</span>
            </a>{/* likedin */}

            <a href='https://github.com/ThiagoAndrade92?tab=repositories' target='_blank' className={`${style.contato} ${style.github}`}>
               <FontAwesomeIcon icon={faGithub} className={`${style.icon}`}/>
               <span className={`${style.nome}`}>GitHub</span>
            </a>{/* GitHub */}

            <a href='/portifolio/Curriculo_Thiago_Atualizado.pdf.pdf' download className={`${style.contato} ${style.curriculo}`}>
               <FontAwesomeIcon icon={faFileText} className={`${style.icon}`}/>
               <span className={`${style.nome}`}>Currículo</span>
            </a>{/* Currículo */}

         </div>
      </section>
   )
};