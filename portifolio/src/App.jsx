//Css
import { Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import { Nav } from './components/Nav';

//Pages
import { Hero } from './pages/Hero';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contatos } from './pages/Contatos';


function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contatos' element={<Contatos/>} />
    </Routes>
    </>
  )
}

export default App
