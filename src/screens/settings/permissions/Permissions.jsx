import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './permissions.scss';
import { Button, Typography } from '@mui/material';
import ModulList from './ModulList';
import { useConfigPermissions } from '../../../context/permissions/ConfigPermissionsContext';
const Permissions = () => {
	const {
		roles,
		moduls,
		searchModuls,
		checked,
		permissions,
		checkedPermissions,
	} = useConfigPermissions();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (moduls && roles) setIsLoading(isLoading => !isLoading);
	}, [roles]);

	if (isLoading) {
		return null;
	}

	return (
		<div className='main permissions'>
			<div className='title'>
				<Typography>Permisos</Typography>
			</div>
			<div className='permissions-container'>
				<div className='rols'>
					{roles.map(role => {
						return (
							<Button key={role.id} onClick={() => searchModuls(role.id)}>
								{role.name}
							</Button>
						);
					})}
				</div>
				<div className='moduls'>
					<div className='header-permissions'>
						<Typography>Modulos Disponibles</Typography>
					</div>
					<div className='moduls-container'>
						{checked.length > 0 && moduls.length > 0 ? (
							moduls.map(modul => {
								return (
									<div key={modul.id} className='card'>
										<div className='card-header'>{modul.name}</div>
										<ModulList
											moduls={modul.permissions}
											check={checkedPermissions}
										/>
									</div>
								);
							})
						) : (
							<h1>Seleccionar un Rol</h1>
						)}
					</div>
					<div className='footer-moduls'>soy el footer</div>
				</div>
			</div>
		</div>
	);
};

export default Permissions;
