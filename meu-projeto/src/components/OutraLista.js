function OutraLista({itens}){
  return (
    <>
      <h3>Lista de coidas boas</h3>
      { itens.length > 0 ? (
        itens.map((item, index) => (
          <p key={index}>{item}</p>
        ))) : (<p>A lista está vazia</p>)}
    </>
  )
}


export default OutraLista
