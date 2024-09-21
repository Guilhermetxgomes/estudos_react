import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <p>Ola</p>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/company">Empresa</Link></li>
          <li><Link to="/newproject">Novo Projeto</Link></li>
        </ul>
      </div>
      <Container customClass="min-height">
        <Routes>
          {/* Usando a prop element com o componente JSX */}
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}


export default App;
