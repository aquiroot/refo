import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, User } from '../interfaces/reqRes';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1)

  useEffect(() => {
      loadUsers()
  }, [])


  const loadUsers = async() => {
    const res = await reqResApi.get<ReqResListado>("/users", {params: {page: pageRef.current}});

     if( res.data.data.length > 0 ) {
       setUsers(res.data.data);
     } else {
       pageRef.current--
       alert("No more registry")
     }
  }

  const previousPage = () => {
    if (pageRef.current === 1 ) {
      return
    } else {
    pageRef.current--
    loadUsers()
    }
  }

  const nextPage = () => {
    pageRef.current++
    loadUsers()
  }

  return {
    users,
    previousPage,
    nextPage
  }
}

