import { useEffect, useReducer } from "react"


interface AuthState {
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string
}

const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: ""
};

type LoginPayload = {
  username: string;
  nombre: string;
}

type AuthAction =
  | {type: "logout"}
  | {type: "login", payload: LoginPayload}

const authReducer = (state: AuthState, action: AuthAction):AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: ""
      }
    case "login":
      return {
        validando: false,
        token: "ABCsiABCno",
        username: action.payload.username,
        nombre: action.payload.nombre
      }
    default:
      return state;
  }

}

export const Login = () => {

  const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(()=> {
      dispatch({type: "logout"})
    }, 1500)
  }, []);

  const login = () => {
    dispatch({type: "login", payload: {username: "dcolaneri", nombre: "Damian"}});
  }

  const logout = () => {
    dispatch({type: "logout"});
  }

  if (validando) {
    return (
      <>
       <h3>Login</h3>

       <div className="alert alert-info">
         Validando...
       </div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>

        {
          (token)
          ? <div className="alert alert-success">Autenticado como: {nombre}</div>
          : <div className="alert alert-danger">No autenticado</div>
        }

         {
          (token)
          ? (
             <button className="btn btn-danger m-1" onClick={logout}>
               Logout
             </button>
          )
          : (
             <button className="btn btn-primary m-1" onClick={login}>
               Login
             </button>
          )
        }
    </>
  )
}
