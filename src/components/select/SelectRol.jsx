import { MenuItem, Select } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { useGlobalContext } from '../../hooks/useGlobalContext';

const SelectRol = ({ rol, handleInput, option }) => {
	const { getRoles } = useGlobalContext();
	const [roles, setRoles] = useState([]);

	useEffect(() => {
		getRoles().then(role => {
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
	);
};

export default memo(SelectRol);
