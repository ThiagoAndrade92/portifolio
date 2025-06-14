//Css
import style from '../Projetos/styles.module.css'

//Imagens
import Barbearia from '../../assets/imagens/projeto-barbearia.png'
import Ecommerce from '../../assets/imagens/e-commerce.png'
import Pokedex from '../../assets/imagens/pokedex.png'
import Genshin from '../../assets/imagens/genshin.png'

export const Projetos = () => {
  return (
    <section className={`${style.projetos} pb-5`} id='projetos'>

        <div className="container">
        <h2 className='titulo text-center pb-5'>Projetos</h2>
            <div className={`${style.box_cards} d-flex justify-content-around flex-wrap gap-5`}>

                <div className={`${style.cards} d-flex flex-column`}>
                    <div className={style.img_projetos}>
                        <img src={Barbearia} alt="Projeto" />
                    </div>
                    <div className={`${style.textos_projetos} d-flex flex-column align-items-center justify-content-center`}>
                        <h2 className={`${style.nome_projeto} text-center`}>Projeto Barbearia</h2>
                        <p className={`${style.descricao} p-2`}>Projeto feito com HTML, CSS, JS e Bootstrap</p>
                        <p className={`${style.descricao} p-2`}>Página ficticía de uma barbearia, podendo adicionar e apagar comentários</p>
                        <a href="https://thiagoandrade92.github.io/barbearia/" className={`${style.link} py-2 px-4 text-center`} target='_blank'>
                        Ver projeto
                        </a>
                    </div>
                </div>{/* card barbearia */}
            
                <div className={`${style.cards} d-flex flex-column`}>
                    <div className={style.img_projetos}>
                        <img src={Ecommerce} alt="Projeto" />
                    </div>
                    <div className={`${style.textos_projetos} d-flex flex-column align-items-center justify-content-center`}>
                        <h2 className={`${style.nome_projeto} text-center`}>Projeto E-commerce</h2>
                        <p className={`${style.descricao} p-2`}>Projeto feito com HTML, CSS e JS</p>
                        <p className={`${style.descricao} p-2`}>Um e-commerce simples, onde adiciona itens, soma valores e finaliza as compras</p>
                        <a href="https://thiagoandrade92.github.io/carrinho/" className={`${style.link} py-2 px-4 text-center`} target='_blank'>
                        Ver projeto
                        </a>
                    </div>
                </div>{/* card confeitaria */}

                <div className={`${style.cards} d-flex flex-column`}>
                    <div className={style.img_projetos}>
                        <img src={Pokedex} alt="Projeto" />
                    </div>
                    <div className={`${style.textos_projetos} d-flex flex-column align-items-center justify-content-center`}>
                        <h2 className={`${style.nome_projeto} text-center`}>Projeto Pokedex</h2>
                        <p className={`${style.descricao} p-2`}>Feito com HTML, CSS e JS</p>
                        <p className={`${style.descricao} p-2`}>Projeto que consome uma API (PokeAPI), onde é possível buscar um pokemon por nome ou número </p>
                        <a href="https://thiagoandrade92.github.io/pokedexv2/" className={`${style.link} py-2 px-4 text-center`} target='_blank'>
                        Ver projeto
                        </a>
                    </div>
                </div>{/* card pokedex */}

                <div className={`${style.cards} d-flex flex-column`}>
                    <div className={style.img_projetos}>
                        <img src={Genshin} alt="Projeto" />
                    </div>
                    <div className={`${style.textos_projetos} d-flex flex-column align-items-center justify-content-center`}>
                        <h2 className={`${style.nome_projeto} text-center`}>Projeto Pagina Genshi Impact</h2>
                        <p className={`${style.descricao} p-2`}>Feito com HTML, CSS e JS </p>
                        <p className={`${style.descricao} p-2`}>Projeto feito para mostrar habilidades com animações</p>
                        <a href="https://thiagoandrade92.github.io/genshinPage/" className={`${style.link} py-2 px-4 text-center`} target='_blank'>
                        Ver projeto
                        </a>
                    </div>
                </div>{/* card genshin*/}

            </div>{/* box-card */}
        </div>{/* container */}
    </section>
  )
}