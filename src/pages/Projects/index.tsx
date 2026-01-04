//Css
import style from './Projects.module.css';

//Images
import { LoginImg } from '../../assets/images/login/index';
import { CepImg} from '../../assets/images/cep/index';
import { TodoImg } from '../../assets/images/todo/index';
import Loja from '../../assets/images/loja.png';

//components
import { Carousel } from '../../components/Carousel';

export const Projects = () => {

   // Carousel Cep
   const cepScreens = [
   CepImg.CepTelaInicial,
   CepImg.CepCamposPreenchidos,
   CepImg.CepResultadoBusca,
];

// Carousel Login
const loginScreens = [
      LoginImg.LoginTelaInicial,
      LoginImg.LoginErroCamposVazios,
      LoginImg.LoginCamposPreenchidos,
      LoginImg.CadastreseTelaInicial,
      LoginImg.CadastreseErroCamposVazios,
      LoginImg.CadastreseErroPreencher,
      LoginImg.CadastreseSenhaMostrar,
      LoginImg.LoginRealizado,
   ];

      // Carousel Todo
      const todoScreens = [
      TodoImg.TarefasTelaInicial,
      TodoImg.TarefasCriadas,
      TodoImg.TarefasTodasTarefas,
      TodoImg.TarefasFeitas,
      TodoImg.TarefasNaoFeitas
   ];

   return (
      <section className={`${style.projects}`} id='projects'>
         <h1 className='mb-5'>Projetos</h1>

         <div className={`${style.cards_box} d-flex row g-3`}>

            <div className='col-12 col-md-6'>
               <div className={`${style.card}`}>

                  <Carousel images={loginScreens} alt="login e cadastro de usuários" />

                  {/* -------------------------------------- */}
                  <h2 className={`${style.title} text-center`}>Autenticação de usuários</h2>
                  <ul className={`${style.info}`}>
                     <li>HTML, CSS, JavaScript</li>
                     <li>Login e cadastro de usuários</li>
                     <li>Sessão persistente com LocalStorage</li>
                     <li>Controle de autenticação</li>
                  </ul>
                  <div className={`${style.link}`}>
                     <a href={'https://thiagoandrade92.github.io/login/'} target='_blank'>Visualizar</a>

                     <a href={'https://github.com/ThiagoAndrade92/login'} target='_blank'>Código</a>
                  </div>
               </div>
            </div>
            {/* ===================================================== */}
            <div className='col-12 col-md-6'>
               <div className={`${style.card} `}>
                  
                  <Carousel images={todoScreens} alt="gerenciador de tarefas" />

                  {/* -------------------------------------- */}
                  <h2 className={`${style.title} text-center`}>Gerenciador de tarefas</h2>
                  <ul className={`${style.info}`}>
                     <li>React + TypeScript</li>
                     <li>Gerenciamento de estado com Context e reducer</li>
                     <li>Inicialização lazy e persistência local</li>
                     <li>Arquitetura previsível estilo Redux</li>
                  </ul>
                  <div className={`${style.link}`}>
                     <a href="https://thiagoandrade92.github.io/toDo/" target='_blank'>Visualizar</a>

                     <a href="https://github.com/ThiagoAndrade92/toDo" target='_blank'>Código</a>
                  </div>
               </div>
            </div>
            {/* ===================================================== */}

            <div className='col-12 col-md-6'>
               <div className={`${style.card} `}>
                  
                  <Carousel images={cepScreens} alt="buscador de cep" />

                  {/* -------------------------------------- */}
                  <h2 className={`${style.title} text-center`}>Buscador de endereços</h2>
                  <ul className={style.info}>
                     <li>Vanilla JS com manipulação direta do DOM</li>
                     <li>Consumo de API REST (ViaCEP)</li>
                     <li>async/await e tratamento de exceções</li>
                     <li>Validação de entrada do usuário</li>
                  </ul>
                  <div className={`${style.link}`}>
                     <a href="https://thiagoandrade92.github.io/buscador-cep/" target='_blank'>Visualizar</a>

                     <a href="https://github.com/ThiagoAndrade92/buscador-cep" target='_blank'>Código</a>
                  </div>
               </div>
            </div>
            {/* ===================================================== */}

            <div className='col-12 col-md-6'>
               <div className={`${style.card} `}>
                  <div className={`${style.card_img}`}>
                     <img src={Loja} alt="Buscador de cep" />
                  </div>
                  <h2 className={`${style.title} text-center`}>Loja virtual</h2>
                  <ul className={style.info}>
                     <li>React</li>
                     <li>Gerenciamento de estado global</li>
                     <li>Carrinho com regras de negócio</li>
                     <li>Persistência local e responsividade</li>
                  </ul>
                  <div className={`${style.link}`}>
                     <a href="https://thiagoandrade92.github.io/store/" target='_blank'>Visualizar</a>

                     <a href="https://github.com/ThiagoAndrade92/store" target='_blank'>Código</a>
                  </div>
               </div>
            </div>
            {/* ===================================================== */}

         </div>{/* cards_box */}
      </section>
   )
};