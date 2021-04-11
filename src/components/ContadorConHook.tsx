import { useCounter } from '../hooks/useCounter';



export const ContadorConHook = () => {

  const {contador, acumular} = useCounter();

  return (
    <>
      <h3>Contador: <small>{contador}</small></h3>

      <button className="btn btn-primary m-2" onClick={()=> acumular(1)} > +1 </button>
      <button className="btn btn-primary m-2" onClick={()=> acumular(-1)} > -1 </button>
    </>
  )
}
