//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Devices
import { Mobile } from './Devices/Mobile/index.js';
import { Desktop } from './Devices/Desktop';

function App() {

  return (
    <>
      <Mobile />
      <Desktop />
    </>
  )
}

export default App
