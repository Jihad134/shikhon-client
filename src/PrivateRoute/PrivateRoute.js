import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loaging}=useContext(authContext)
    const location=useLocation()
    if(loaging){
        return <div><p>Loading............</p></div>
    }
  if(!user){
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
  }
  return children
};

export default PrivateRoute;