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
        <Link style={{ textDecoration: 'none', color: '#3600CC', fontSize:'20px', marginLeft:"24px" }} to='/todos'>Todos</Link>
        {users?.user?.users?.data.map((user:any) => {
          return <h1 className="user-list" key={user.id}>{user.name}</h1>
        })}
    </div>
  )
}


export default Users;