import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropType from 'prop-types'
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    //console.log(location)

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={location?.pathname} to='/login'></Navigate>
    );
};
PrivateRoute.propTypes={
    children:PropType.node
}
export default PrivateRoute;