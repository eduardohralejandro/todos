import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { login } from '../store/actions/authActions';


const Signin: FC<RouteComponentProps> = ({ history }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  
  const dispatch = useDispatch();
  const loginState = useSelector((state: any) => state);
      
    const actionLogin = () => {
      const user = { id: "3", email: 'nilson@email.com', password: 'nilson' }; // auth user
      dispatch(login(user));
    }
  
    if (loginState.user.isLoggedIn) {
        history.push('/todos')
        window.location.reload();
    }

  return (
    <div className='signin-container'>
        <input className='name-input' onChange={(event) => setName(event.target.value)} placeholder="name" />
        <input className='password-input' onChange={(event) => setEmail(event.target.value)}  placeholder='password' /> 
        <button className='btn-signin' onClick={() => actionLogin()}>sign in</button>
    </div>
  )
}


export default Signin;