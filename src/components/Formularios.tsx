import { useForm } from "../hooks/useForm"


export const Formularios = () => {

  const initialForm = {
    email: "test@test.com",
		password: "123456",
	};

  const { email, password, handleInputChange } = useForm(initialForm);

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control m-2"
        placeholder="email"
        value={email}
        onChange={ ({target }) => handleInputChange(target.value, "email")}
      />

      <input
        type="password"
        className="form-control m-2"
        placeholder="password"
        value={password}
        onChange={ ({target }) => handleInputChange(target.value, "password")}
      />
    </>
  )
}