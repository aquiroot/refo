
interface Persona {
  nombre:string,
  edad:number,
  direccion: Direccion
}

interface Direccion {
  pais:string,
  casa:number
}



export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombre: "damian",
    edad: 38,
    direccion: {
      pais: "Argentina",
      casa: 6273
    }
  }

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}
