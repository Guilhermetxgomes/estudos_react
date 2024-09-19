function Evento(){
  function meuEvento(){
    console.log("Fui ativado")
  }


  return(
    <>
      <p>Clique para aumentar a contagem</p>
      <button onClick={meuEvento}>Ativar</button>
    </>

  )

}

export default Evento
