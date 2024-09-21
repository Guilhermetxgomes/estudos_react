import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import Footer from './pages/Footer'
import Evento from './components/Evento'
import Checkbox from  '@mui/material/Checkbox'


function App() {

  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
      <Routes>
        <Route exact path="/" Component={Home}>
        </Route>
        <Route path="/empresa"  Component={Empresa}>
        </Route>
        <Route path="/contato"  Component={Contato}>
        </Route>
      </Routes>
      <Footer />
    </Router>
    // <>

    //   <Evento />
    //   <Checkbox />
    // </>


  )
}

export default App;
