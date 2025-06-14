//Css
import style from './styles.module.css'

//Imagens
import FotoThiago from "../../assets/imagens/thiago-foto.jpg"

export const Hero = () => {
  return (
      <section className={`${style.hero} pb-5 container`} id='hero'>
        <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
          <div className={`${style.img_hero} me-md-5 mb-5`}>
            <img src={FotoThiago} alt="Foto de Thiago" />
          </div>{/* img-hero */}
          <div className={style.textos_hero}>
            <h1 className='mb-3'>Olá<span>,</span> Sou Thiago</h1>
            <p>Sou Thiago, desenvolvedor <span>front-end</span> com o foco em criar soluções inovadoras e de
              alta qualidade. Tenho experiência em HTML, CSS, JavaScript, Bootstrap, React, Git, GitHub e
              consumo de APIs, estou aprimorando minhas habilidades para oferecer as melhores expreiências
              de usuário. Nos últimos meses, estudei e pratiquei intensamente.</p>
            <p>Estou em busca da minha primeira oportunidade como desenvolvedor <span>front-end</span> e
              acredito que minha dedicação, capacidade de aprender rapidamente e paixão por tecnologia podem
              agregar muito. Estou pronto para contribuir e crescer profissionalmente, buscando sempre a
              excelência em cada projeto.</p>
          </div>{/* textos-hero */}
        </div>
      </section>
  )
}