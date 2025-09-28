//Css
import style from './Hero.module.css';

export const Hero = () => {


   return (
      <section className={`${style.hero} d-flex flex-column align-items-center justify-content-center`}>
         <div className={` ${style.img_hero} d-flex align-items-center justify-content-center mb-3`}>
            <div className={`${style.img}`}></div>
         </div>
         <div className={`${style.text}`}>
            <h2 className='text-center'><span className='span'>Olá</span>, sou Thiago</h2>
            <p>Sou desenvolvedor <span className='span'>front-end</span> com foco em React.js, apaixonado por criar interfaces funcionais, organizadas e responsivas. Tenho experiência em desenvolvimento de aplicações utilizando JavaScript (ES6+), React Hooks, Context API, CSS Modules e integração com APIs REST (como o json-server para prototipagem).

               Já desenvolvi projetos como carrinhos de compras, sistemas de listagem de produtos e interfaces interativas, aplicando boas práticas de componentização, gerenciamento de estado e consumo de dados.

               Também possuo conhecimento em Bootstrap, Font Awesome e no uso de ferramentas modernas de build como Vite, além de experiência em versionamento com Git/GitHub.

               Busco constantemente evoluir como dev, aprendendo novas tecnologias e aprimorando meus projetos para oferecer experiências cada vez mais fluidas e escaláveis.</p>
         </div>
      </section>
   )
};