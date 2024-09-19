import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = "Lucas"

  return (
    <div className="App">
      <SayMyName nome="Guilherme" />
      <SayMyName nome="Mateus" />
      <SayMyName nome={nome} />
      <Pessoa nome="Guilherme" idade="21" profissao="Estudante" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
