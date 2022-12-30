import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoute = () => {
  const loggedIn = JSON.parse(localStorage.getItem('username')) === 'foo';

  return loggedIn ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoute;