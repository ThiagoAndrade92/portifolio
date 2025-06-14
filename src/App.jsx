//Css
import './App.css'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sobre } from './components/Sobre'
import { Habilidades } from './components/Habilidades'
import { Projetos } from './components/Projetos'

function App() {

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

export default App
