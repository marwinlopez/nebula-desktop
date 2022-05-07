import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const ModulList = ({ moduls, check }) => {
	const [checked, setChecked] = useState([]);
	useEffect(() => {
		setChecked(check);
	}, [check]);
	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List
			className='checked-list'
			sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
		>
			{moduls.map(modul => {
				const labelId = `checkbox-list-label-${modul.id}`;

				return (
					<ListItem key={modul.id} disablePadding>
						<ListItemButton
							role={undefined}
							onClick={handleToggle(modul.id)}
							dense
						>
							<ListItemIcon>
								<Checkbox
									edge='start'
									checked={checked.indexOf(modul.id) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{ 'aria-labelledby': labelId }}
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={modul.name} />
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
};

export default ModulList;
