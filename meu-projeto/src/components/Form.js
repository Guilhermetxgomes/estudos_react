function Form(){

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log("Cadastrou usuario")
  }

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input Type="text" placeholder="Digite seu nome" />
        </div>
        <div>
          <input Type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
