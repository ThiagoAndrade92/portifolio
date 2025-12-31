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
      <section className={`${style.contatos} `} id='contacts'>
         <h1>Contatos</h1>
         <div className={`${style.box_contatos} d-flex flex-column align-items-center justify-content-center`}>

            <a href="https://wa.me/5519992901698" target="_blank" className={`${style.contato} ${style.whatsapp}`}>
               <FontAwesomeIcon icon={faWhatsapp} className={`${style.icon}`} />
               <span className={`${style.nome}`}>Whatsapp</span>
            </a>{/* whatsapp */}

            <a href='https://www.linkedin.com/in/thiago-silva-5581a41a2/' target='_blank' className={`${style.contato} ${style.linkedin}`}>
               <FontAwesomeIcon icon={faLinkedin} className={`${style.icon}`} />
               <span className={`${style.nome}`}>Likedin</span>
            </a>{/* likedin */}

            <a href='https://github.com/ThiagoAndrade92?tab=repositories' target='_blank' className={`${style.contato} ${style.github}`}>
               <FontAwesomeIcon icon={faGithub} className={`${style.icon}`} />
               <span className={`${style.nome}`}>GitHub</span>
            </a>{/* GitHub */}

            <button onClick={mostrarCurriculo} className={`${style.contato} ${style.curriculo}`}>
               <FontAwesomeIcon icon={faFileText} className={`${style.icon}`} />
               <span className={`${style.nome}`}>Currículo</span>
            </button>{/* Currículo */}

         </div>
         {/* Currículo */}
         <div className={`${style.curriculo_dados} ${toggle ? 'd-block' : 'd-none'}`}>
            <header>
               <h1 className={`${style.nome}`}>Thiago da Silva Andrade</h1>
               <p>
                  Nascido em 22/09/1992 (33 anos) • Limeira - SP
               </p>
               <p>
                  Endereço: Rua Manoel Monteiro de Moraes, Jardim Olga Veroni, Limeira - SP
               </p>
               <p>
                  Portfólio: <a href="https://thiagoandrade92.github.io/portifolio/" target="_blank" rel="noopener">https://thiagoandrade92.github.io/portifolio/</a>
               </p>
            </header>
            <section>
               <h2>Objetivo</h2>
               <p>Conseguir meu primeiro emprego na área de desenvolvimento front-end onde eu possa aplicar e expandir meus conhecimentos em HTML, CSS e JavaScript, contribuir com projetos reais e aprender em um ambiente profissional.</p>
            </section>
            <section>
               <h2>Competências Técnicas</h2>
               <ul>
                  <li>HTML5 semântico</li>
                  <li>CSS (flexbox, grid, mobile-first)</li>
                  <li>JavaScript (ES6+): manipulação DOM, fetch/API, promessas, async/await</li>
                  <li>React (componentes funcionais, hooks como useState/useEffect, Context API)</li>
                  <li>React Router (roteamento, NavLink)</li>
                  <li>Ferramentas: Vite, npm, Git e GitHub</li>
                  <li>Consumo de APIs (ex.: busca de CEP) e tratamento de formulários</li>
                  <li>Boas práticas: organização de projetos, responsividade e acessibilidade básica</li>
               </ul>
            </section>
            <section>
               <h2>Formação</h2>
               <ul>
                  <li>Autodidata e bootcamps / cursos online em desenvolvimento front-end — estudos contínuos em HTML, CSS, JavaScript e React.</li>
               </ul>
            </section>
            <section>
               <h2>Projetos (portfólio)</h2>
               <p>Projetos desenvolvidos como prática e para o portfólio — disponíveis no link acima:</p>
               <ul>
                  <li>
                     <strong>Buscador de CEP</strong> — aplicação que consulta uma API de CEP para preencher endereço automaticamente.
                  </li>
                  <li>
                     <strong>ToDo App</strong> — lista de tarefas com criação, edição, remoção e persistência.
                  </li>
                  <li>
                     <strong>Sistema de Login (simulado)</strong> — formulário de login e cadastro com validação básica.
                  </li>
                  <li>
                     <strong>Portfólio Pessoal</strong> — site responsivo (mobile-first) com apresentação dos projetos.
                  </li>
               </ul>
            </section>
            <section>
               <h2>Idiomas</h2>
               <ul>
                  <li>Português — Nativo</li>
                  <li>Inglês — Leitura técnica / básico-intermediário</li>
               </ul>
            </section>
            <section>
               <h2>Competências Pessoais</h2>
               <ul>
                  <li>Vontade de aprender e se adaptar</li>
                  <li>Trabalho em equipe e comunicação</li>
                  <li>Organização e atenção a detalhes</li>
                  <li>Resiliência e persistência em resolver problemas</li>
               </ul>
            </section>
            <footer>
               <p>Currículo criado para candidatura a vaga de desenvolvedor front-end júnior / estágio.</p>
               <p>Data: 30/09/2025</p>
            </footer>
         </div>

      </section>
   )
};