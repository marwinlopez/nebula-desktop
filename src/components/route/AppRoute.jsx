import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../screens/dashboard/Dashboard';
import NotFound from '../../screens/notFound/NotFound';
import Roles from '../../screens/settings/roles/Roles';
import RequireAuth from '../navigations/RequireAuth';
import Menu from '../menu/Menu';
import UserList from '../../screens/settings/users/UserList';
import ModalUser from '../../screens/settings/users/ModalUser';
import { UsersContextProvider } from '../../context/UsersContext';
import SignIn from '../../screens/auth/SignIn';
import Permissions from '../../screens/settings/permissions/Permissions';
import Brands from '../../screens/inventory/brand/Brands';
import Shop from '../../screens/inventory/shop/Shop';
import Warehouse from '../../screens/inventory/warehouse/Warehouse';
import WarehouseLocations from '../../screens/inventory/warehouseLocation/WarehouseLocations';
import UnitOfMeasurement from '../../screens/inventory/unitMeasurement/UnitOfMeasurement';
import { ConfigPermissionsContextProvider } from '../../context/permissions/ConfigPermissionsContext';

const AppRoute = props => {
	return (
		<UsersContextProvider>
			<Routes>
				<Route path='/' element={<RequireAuth />}>
					<Route element={<Menu />}>
						<Route index element={<Dashboard />} />
						<Route path='/inventory'>
							<Route path='shop' element={<Shop />} />
							<Route path='warehouse' element={<Warehouse />} />
							<Route
								path='warehouse-location'
								element={<WarehouseLocations />}
							/>
							<Route
								path='unit-of-measurement'
								element={<UnitOfMeasurement />}
							/>
							<Route path='brand' element={<Brands />} />
						</Route>
						<Route path='/settings'>
							<Route path='users' element={<UserList />} />
							<Route path='roles' element={<Roles />} />
							<Route
								path='permissions'
								element={
									<ConfigPermissionsContextProvider>
										<Permissions />
									</ConfigPermissionsContextProvider>
								}
							/>
						</Route>
					</Route>
				</Route>
				<Route path='/modal/users'>
					<Route index element={<ModalUser />} />
					<Route path=':id' element={<ModalUser />} />
				</Route>
				<Route path='/login' element={<SignIn />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</UsersContextProvider>
	);
};

export default AppRoute;
