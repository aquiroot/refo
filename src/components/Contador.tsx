import { useState } from "react"


export const Contador = () => {

  const [contador, setContador] = useState<number>(0);

  const acumular = (numero: number) => {
    setContador(contador + numero)
  }

  return (
    <>
      <h3>Contador: <small>{contador}</small></h3>

      <button className="btn btn-primary m-2" onClick={()=> acumular(1)} > +1 </button>
      <button className="btn btn-primary m-2" onClick={()=> acumular(-1)} > -1 </button>
    </>
  )
}
