//Css
import style from './About.module.css'

export const About = () => {



   return (
      <section className={`${style.about} d-flex flex-column align-items-center justify-content-center`}>
         <h1 className='mb-5'>Sobre mim</h1>
         <p><span className='span'>Olá!</span> Eu sou o <span className='span'>Thiago</span>, uma pessoa curiosa e determinada, que gosta de aprender coisas novas e transformar ideias em algo concreto. Sou apaixonado por tecnologia, mas também curto aproveitar meu tempo fora das telas — seja ouvindo música, jogando, assistindo séries ou passando momentos com pessoas importantes na minha vida.

            No lado profissional, venho me dedicando ao desenvolvimento front-end, com foco em React.js, JavaScript (ES6+), CSS Modules, Bootstrap e integração com APIs. Gosto de aprender na prática, criando projetos que me desafiam e mostram meu crescimento como desenvolvedor.

            Sou persistente, gosto de resolver problemas e acredito que evolução vem um passo de cada vez, com disciplina e dedicação.</p>
      </section>
   )
};