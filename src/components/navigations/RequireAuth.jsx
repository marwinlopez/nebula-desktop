import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const RequireAuth = ({ children }) => {
	const { token } = useContext(GlobalContext);
	const location = useLocation();
	if (!token) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return <>{children}</>;
};

export default RequireAuth;
