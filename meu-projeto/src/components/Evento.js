import { useState } from 'react'

function Evento(){
  function aumentarContador(){
    setValorContador(valorContador + 1)
  }

  const [valorContador, setValorContador] = useState()

  return(
    <>
      <p>Clique para aumentar a contagem</p>
      <button onClick={aumentarContador}>Ativar</button>
      <p>O valor do contador é: {valorContador}</p>
    </>

  )

}

export default Evento
