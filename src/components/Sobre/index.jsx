import style from '../Sobre/styles.module.css'

export const Sobre = () => {
    return (
        <section className={`${style.sobre} pb-5`} id='sobre'>
            <div className="container">
                <h2 className='titulo text-center'>Sobre mim</h2>
            <p>Tenho <span>32 anos</span> e sou uma pessoa de estilo de vida mais discreto, gosto de ficar em
                casa e valorizar meu tempo com atividades como jogar, assistir animes e séries, além de treinar
                na academia. Sou barbeiro e estou focado em minha carreira como desenvolvedor front-end. Tenho
                um cachorro e sou apaixonado por tecnologia, buscando sempre me desenvolver e aprender novos
                desafios.</p>
                </div>{/* container */}
        </section>
    )
}