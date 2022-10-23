import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loader} = useContext(AuthContext);
    console.log('private route',user)

    if(loader){
        console.log(loader)
        return <Spinner  animation="border" variant="success center"></Spinner>
    }
    if(!user){
        return <Navigate to='/login' state={{from : location}} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;