import { Route, Routes } from 'react-router-dom';
import Login from '../../screens/auth/Login';
import Brands from '../../screens/brand/Brands';
import Dashboard from '../../screens/dashboard/Dashboard';
import NotFound from '../../screens/notFound/NotFound';
import CreateProduct from '../../screens/product/CreateProduct';
import ListProduct from '../../screens/product/ListProduct';
import Permissions from '../../screens/settings/permissions/Permissions';
import Roles from '../../screens/settings/roles/Roles';
import Users from '../../screens/settings/users/Users';
import Shop from '../../screens/shop/Shop';
import UnitOfMeasurement from '../../screens/unitMeasurement/UnitOfMeasurement';
import Warehouse from '../../screens/warehouse/Warehouse';
import WarehouseLocations from '../../screens/warehouseLocation/WarehouseLocations';
import Menu from '../menu/Menu';
import RequireAuth from './RequireAuth';

const Navigation = () => {
	return (
		<Routes>
			<Route path='/' element={<Menu />}>
				<Route
					index
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				/>
				<Route path='inventory'>
					<Route
						path='shop'
						element={
							<RequireAuth>
								<Shop />
							</RequireAuth>
						}
					/>
					<Route
						path='warehouse'
						element={
							<RequireAuth>
								<Warehouse />
							</RequireAuth>
						}
					/>
					<Route
						path='warehouse-location'
						element={
							<RequireAuth>
								<WarehouseLocations />
							</RequireAuth>
						}
					/>
					<Route
						path='unit-of-measurement'
						element={
							<RequireAuth>
								<UnitOfMeasurement />
							</RequireAuth>
						}
					/>
					<Route
						path='brand'
						element={
							<RequireAuth>
								<Brands />
							</RequireAuth>
						}
					/>
				</Route>
				<Route path='/product'>
					<Route
						path='list'
						element={
							<RequireAuth>
								<ListProduct />
							</RequireAuth>
						}
					/>
					<Route
						path='create'
						element={
							<RequireAuth>
								<CreateProduct />
							</RequireAuth>
						}
					/>
				</Route>
				<Route path='/settings'>
					<Route
						path='users'
						element={
							<RequireAuth>
								<Users />
							</RequireAuth>
						}
					/>
					<Route
						path='roles'
						element={
							<RequireAuth>
								<Roles />
							</RequireAuth>
						}
					/>
					<Route
						path='permissions'
						element={
							<RequireAuth>
								<Permissions />
							</RequireAuth>
						}
					/>
				</Route>
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Navigation;
