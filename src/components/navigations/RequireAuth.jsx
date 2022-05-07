import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const RequireAuth = ({ children }) => {
	const { token } = useContext(GlobalContext);
	const location = useLocation();
	if (!token) {
		return <Navigate to='/login' replace state={{ from: location }} />;
	}

	return (
		<div className='app-container'>
			<Outlet />
		</div>
	);
};

export default RequireAuth;
