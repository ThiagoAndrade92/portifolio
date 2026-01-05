//Css
import style from './Contatos.module.css';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Contatos = () => {

   const [toggle, setToggle] = useState(false);

   const mostrarCurriculo = () => {
      setToggle(!toggle);
   };

   return (
      <section className={`${style.contatos} `}>
         <h1>Contatos</h1>
         <div className={`${style.box_contatos} d-flex flex-column align-items-center justify-content-center`}>

            <a 
            href="https://wa.me/5519992901698" 
            target="_blank" 
            className={`${style.contato} ${style.whatsapp}`}
            title='Ir para o whatsapp'
            aria-label='Ir para o whatsapp'
            >
               <FontAwesomeIcon icon={faWhatsapp} className={`${style.icon}`} />
               <span className={`${style.nome}`}>Whatsapp</span>
            </a>{/* whatsapp */}

            <a 
            href='https://www.linkedin.com/in/thiago-silva-5581a41a2/' 
            target='_blank' 
            className={`${style.contato} ${style.linkedin}`}
            title='Ir para o linkedin'
            aria-label='Ir para o linkedin'
            >
               <FontAwesomeIcon icon={faLinkedin} className={`${style.icon}`} />
               <span className={`${style.nome}`}>Likedin</span>
            </a>{/* likedin */}

            <a 
            href='https://github.com/ThiagoAndrade92?tab=repositories' 
            target='_blank' 
            className={`${style.contato} ${style.github}`}
            title='Ir para o github'
            aria-label='Ir para o github'
            >
               <FontAwesomeIcon icon={faGithub} className={`${style.icon}`} />
               <span className={`${style.nome}`}>GitHub</span>
            </a>{/* GitHub */}

            <a 
            href='./Currículo2026.pdf'
            download='Currículo2026'
            className={`${style.contato} ${style.curriculo}`}
            >
               <FontAwesomeIcon icon={faFileText} className={`${style.icon}`} />
               <span className={`${style.nome}`}>Currículo</span>
            </a>{/* Currículo */}

         </div>

      </section>
   )
};