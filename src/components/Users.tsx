import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../store/actions/authActions";


const Users = () => {
  const users = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const token = localStorage.getItem('user') as string;

  useEffect(() => {
    dispatch(getUsers(token)) 
  }, [dispatch, token]);
  
  return (
    <div>
        <Link to='/todos'>Todos</Link>
        {users?.user?.users?.data.map((user:any) => {
          return <h1 key={user.id}>{user.name}</h1>
        })}
    </div>
  )
}


export default Users;