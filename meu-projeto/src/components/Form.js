import {useState} from 'react'


function Form(){

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input Type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input Type="password" id="password" name="password"placeholder="Digite seu senha" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <input Type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
