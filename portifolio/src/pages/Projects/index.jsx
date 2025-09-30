//Css
import style from './Projects.module.css';

//Images
import Login from '../../assets/images/login.png';
import Cep from '../../assets/images/cep.png';
import Todo from '../../assets/images/todo.png';

export const Projects = () => {




   return (
      <section className={`${style.projects}`}>
         <h1 className='mb-5'>Projetos</h1>

         <div className={`${style.cards_box} row g-3`}>

            <div className='col-12 col-md-6'>
               <div className={`${style.card}`}>
                  <div className={`${style.card_img}`}>
                     <img src={Login} alt="Login" />
                  </div>
                  <h1 className={`${style.title} text-center`}>Login</h1>
                  <div className={`${style.p}`}>
                     <p>Sistema frontend de autenticação com HTML, CSS e JavaScript, usando LocalStorage. Permite cadastro de usuários com validação de campos, login com email e senha, exibe saudação personalizada na Home e permite sair da conta. Inclui recurso de mostrar/ocultar senha e validações em tempo de envio.</p>
                  </div>
                  <div className={`${style.link}`}>
                     <a href={'https://thiagoandrade92.github.io/login/'} target='_blank'>Ver mais</a>
                  </div>
               </div>
            </div>

            <div className='col-12 col-md-6'>
               <div className={`${style.card} `}>
                  <div className={`${style.card_img}`}>
                     <img src={Todo} alt="todo list" />
                  </div>
                  <h1 className={`${style.title} text-center`}>To Do List</h1>
                  <div className={`${style.p}`}>
                     <p>Gerencie suas tarefas de forma simples e dinâmica! Adicione, conclua e remova tarefas com persistência no navegador usando React, Context API e localStorage.
                        Tecnologias: React, Context API, useReducer, CSS Modules</p>
                  </div>
                  <div className={`${style.link}`}>
                     <a href="https://thiagoandrade92.github.io/toDo/" target='_blank'>Ver mais</a>
                  </div>
               </div>
            </div>

            <div className='col-12 col-md-6'>
               <div className={`${style.card} `}>
                  <div className={`${style.card_img}`}>
                     <img src={Cep} alt="Buscador de cep" />
                  </div>
                  <h1 className={`${style.title} text-center`}>Buscar CEP</h1>
                  <div className={`${style.p}`}>
                     <p>Um aplicativo web que permite pesquisar endereços completos a partir de informações como UF, cidade e rua. O projeto utiliza JavaScript moderno para fazer requisições à API do ViaCEP e exibir os resultados de forma dinâmica, com tratamento de erros e validação de campos. Ideal para demonstrar habilidades em DOM manipulation, async/await e consumo de APIs públicas.
                        Tecnologias: HTML, CSS, JavaScript (Vanilla JS), API ViaCEP</p>
                  </div>
                  <div className={`${style.link}`}>
                     <a href="https://thiagoandrade92.github.io/buscador-cep/" target='_blank'>Ver mais</a>
                  </div>
               </div>
            </div>

         </div>{/* cards_box */}
      </section>
   )
};