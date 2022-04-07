import { MenuItem, Select } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { useGlobalContext } from '../../hooks/useGlobalContext';

const SelectRol = ({ isToken, rol, handleInput, option }) => {
	const { getRoles } = useGlobalContext();
	const [roles, setRoles] = useState([]);
	// const [isRol, setIsRol] = useState(0);
	useEffect(() => {
		console.log(rol);
		// if (rol !== null && rol.id) setIsRol(rol.id);
		getRoles(isToken).then(role => {
			setRoles(role);
		});
	}, []);

	return (
		<Select
			labelId='rol-label'
			id='rol'
			value={rol.id}
			onChange={handleInput}
			fullWidth
			label='Rol'
		>
			<MenuItem key={0} value={0} className={option} disabled>
				<em>Seleccione un Rol....</em>
			</MenuItem>
			{roles.map((r, index) => {
				return (
					<MenuItem key={index} value={r.id} className={option}>
						{r.name}
					</MenuItem>
				);
			})}
		</Select>
		// <h1>hola</h1>
	);
};

export default memo(SelectRol);
