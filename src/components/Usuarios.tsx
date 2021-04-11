import { User } from '../interfaces/reqRes';
import { useUsers } from '../hooks/useUsers';


export const Usuarios = () => {

  const {users, previousPage, nextPage } = useUsers();

  const renderItem = (user: User) => {
    return (
      <tr key={user.id.toString()}>
        <td><img src={user.avatar} alt="profile" style={{width: 50, borderRadius: 100}}/></td>
        <td>{user.first_name} {user.last_name}</td>
        <td>{user.email}</td>
      </tr>
    )
  }


  return (
    <>
      <h3>Users list</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => renderItem(user))
          }
        </tbody>
      </table>
      <button className="btn btn-primary m-1" onClick={previousPage}>previous</button>
      <button className="btn btn-primary m-1" onClick={nextPage}>next</button>
    </>
  )
}
