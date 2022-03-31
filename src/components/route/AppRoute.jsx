import { Route, Routes } from 'react-router-dom';
import Login from '../../screens/auth/Login';
import Dashboard from '../../screens/dashboard/Dashboard';
import NotFound from '../../screens/notFound/NotFound';
import Roles from '../../screens/settings/roles/Roles';
import AppFooter from '../footer/AppFooter';
import AppMenu from '../menu/AppMenu';
import RequireAuth from '../navigations/RequireAuth';
import Menu from '../menu/Menu';
import UserList from '../../screens/settings/users/UserList';
import CreateUser from '../../screens/settings/users/CreateUser';
import ViewUser from '../../screens/settings/users/ViewUser';
// import { useContext } from 'react';
import { UsersContextProvider } from '../../context/UsersContext';
import SignIn from '../../screens/auth/SignIn';
const AppRoute = props => {
	// const global = useContext(GlobalContext);
	// console.log(global);
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
						<Route path='/modal/create-users'>
							<Route index element={<CreateUser />} />
							<Route path=':id' element={<ViewUser />} />
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
