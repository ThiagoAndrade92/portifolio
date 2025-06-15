//Components
import { Header } from '../Header';
import { Hero } from '../Hero';
import { Sobre } from '../Sobre';
import { Habilidades } from '../Habilidades';
import { Projetos } from '../Projetos';

export const Home = () => {
  return (
    <>
    <Header />
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
    </>
  )
}
