import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const name = 'Guilherme';

  function soma(a,b){
    return a + b
  }

  const url = 'http://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Soma: {soma(1,2)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
