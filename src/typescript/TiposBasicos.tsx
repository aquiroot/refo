

export const TiposBasicos = () => {

  const nombre: string = "damian";
  const edad: number = 38;
  let isActive: boolean = true;

  const poderes: string[] = ["velocidad", "volar", "fuerza"];

  return (
    <>
      <h3>Tipos basicos</h3>
      {nombre}, {edad}, {isActive ? "activo" : "desactivado"}
      <br />
      {poderes.join(", ")}
    </>
  )
}
