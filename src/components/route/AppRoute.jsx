import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../screens/dashboard/Dashboard';
import NotFound from '../../screens/notFound/NotFound';
import Roles from '../../screens/settings/roles/Roles';
import AppFooter from '../footer/AppFooter';
import AppMenu from '../menu/AppMenu';
import RequireAuth from '../navigations/RequireAuth';
import Menu from '../menu/Menu';
import UserList from '../../screens/settings/users/UserList';
import ModalUser from '../../screens/settings/users/ModalUser';
import { UsersContextProvider } from '../../context/UsersContext';
import SignIn from '../../screens/auth/SignIn';

const AppRoute = props => {
	return (
		<div className='app'>
			<AppMenu />
			<div className='app-container'>
				<UsersContextProvider>
					<Routes>
						<Route
							path='/'
							element={
								<RequireAuth>
									<Menu />
								</RequireAuth>
							}
						>
							<Route index element={<Dashboard />} />
							<Route path='/settings'>
								<Route path='users' element={<UserList />} />
								<Route path='roles' element={<Roles />} />
							</Route>
						</Route>
						<Route path='/login' element={<SignIn />} />
						<Route path='/modal/users'>
							<Route index element={<ModalUser />} />
							<Route path=':id' element={<ModalUser />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</UsersContextProvider>
			</div>
			<AppFooter />
		</div>
	);
};

export default AppRoute;
