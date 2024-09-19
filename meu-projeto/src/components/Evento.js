import { useState } from 'react'
import Button from './Button'

function Evento(){
  function aumentarContador(){
    setValorContador(valorContador + 1)
  }

  function diminuirContador(){
    setValorContador(valorContador - 1)
  }

  const [valorContador, setValorContador] = useState()

  return(
    <>
      <p>Clique para aumentar a contagem</p>
      <Button event={aumentarContador} text="Aumentar contador" />
      <Button event={diminuirContador} text="Diminuir contador" />
      <p>O valor do contador é: {valorContador}</p>
    </>

  )

}

export default Evento
