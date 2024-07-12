import React, { Children, useContext } from 'react';
import { AuthContext } from '../Components/Context/MyContext';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';

const PrivateRouter = ({children}) => {
    const { user, loader } = useContext(AuthContext)
   
    const location = useLocation()

    if (loader) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to={'/signIn'} state={{from : location}} replace></Navigate>
    }
    return children
};

export default PrivateRouter;