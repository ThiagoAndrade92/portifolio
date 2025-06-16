//React
import { useState } from "react";

//Css
import style from "../Header/styles.module.css";

//Imagens
import Logo from '../../assets/imagens/logo.png';

//Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export const Header = () => {
  const [ menuAberto, setMenuAberto ] = useState(false);

  const handleMenu = () => {
     setMenuAberto(!menuAberto)
  }

  return (
    <header className={`${style.header} bg-dark d-flex align-items-center`}>
      <div className="container d-flex align-items-center justify-content-between justify-content-md-around">
        <div className={`${style.logo} d-flex align-items-center`}>
          <img src={Logo} alt="Img" />
        </div>
        <nav className={`${style.nav} d-none d-md-flex align-items-center justify-content-center`}>
          <ul className='d-flex align-items-center justify-content-around me-5'>
            <li className="me-3"><a href="#hero">Home</a></li>
            <li className="me-3"><a href="#sobre">Sobre</a></li>
            <li className="me-3"><a href="#habilidades">Habilidades</a></li>
            <li className="me-3"><a href="#projetos">Projetos</a></li>
            <li><a href="../../public/_portifolio-react_public_Thiago_curriculo (2).pdf" download>Currículo</a></li>
          </ul>

          <div className={`${style.contatos} d-flex align-items-center `}>
            
            <a href="https://wa.me/5519992901698" target="_blank" className={`${style.media} me-3`}>
              <FontAwesomeIcon icon={faWhatsapp} className={style.icone}/>
            </a>

            <a href="https://www.linkedin.com/in/thiago-silva-5581a41a2/" target="_blank" className={`${style.media}`}>
              <FontAwesomeIcon icon={faLinkedin} className={style.icone} />
            </a>

          </div>{/* contatos */}
        </nav>{/* nav */}
      </div>

        {/* NAV_MOBILE */}
        <nav className={`${style.nav_mobile} d-block d-md-none`}>
          <button className={`${style.menu} ${menuAberto ? (style.active) : ''} d-flex flex-column justify-content-evenly align-items-center me-3`} onClick={handleMenu}>
            <div className={style.linha1}></div>
            <div className={style.linha2}></div>
            <div className={style.linha3}></div>
          </button>
          <ul className={`${menuAberto ? (style.active) : ''} d-flex flex-column align-items-center justify-content-around bg-dark p-2`}  onClick={handleMenu}>
            <li className="me-3"><a href="#hero">Home</a></li>
            <li className="me-3"><a href="#sobre">Sobre</a></li>
            <li className="me-3"><a href="#habilidades">Habilidades</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="/_portifolio-react_public_Thiago_curriculo (2).pdf" download>Currículo</a></li>
            <div className={`${style.contatos} d-flex align-items-center `}>
            
            <a href="https://wa.me/5519992901698" target="_blank" className={`${style.media} me-3`}>
              <FontAwesomeIcon icon={faWhatsapp} className={style.icone}/>
            </a>

            <a href="https://www.linkedin.com/in/thiago-silva-5581a41a2/" target="_blank" className={`${style.media}`}>
              <FontAwesomeIcon icon={faLinkedin} className={style.icone} />
            </a>

          </div>{/* contatos */}
          </ul>
        </nav>{/* nav-mobile */}
    </header>
  )
}