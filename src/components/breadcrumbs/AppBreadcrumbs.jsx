import { useEffect, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { Grid, Link } from '@mui/material';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

export default function AppBreadcrumbs() {
	const location = useLocation();
	const [setBreadcrumbs, setSetBreadcrumbs] = useState(null);
	const [isBreadcrumbs, setIsBreadcrumbs] = useState(null);
	const { breadcrumb } = useGlobalContext();
	useEffect(async () => {
		const pathname = location.pathname.split('/');
		pathname.shift();
		const bread = await breadcrumb(pathname);
		setIsBreadcrumbs({ ...isBreadcrumbs, ...bread });
	}, [location]);

	if (!isBreadcrumbs) {
		return null;
	}
	return (
		<Grid
			container
			direction='row'
			justifyContent='flex-end'
			alignItems='flex-start'
			style={{
				paddingTop: '5px',
				paddingLeft: '15px',
				paddingRight: '15px',
			}}
		>
			<Breadcrumbs aria-label='breadcrumb'>
				{isBreadcrumbs && isBreadcrumbs.items ? (
					<Link
						key={isBreadcrumbs.index.name}
						color='inherit'
						href='#'
						onClick={handleClick}
					>
						{isBreadcrumbs.index.name}
					</Link>
				) : isBreadcrumbs ? (
					<Link
						key={isBreadcrumbs.index.name}
						color='inherit'
						href='#'
						onClick={handleClick}
					>
						{isBreadcrumbs.index.name}
					</Link>
				) : null}

				{isBreadcrumbs.items
					? isBreadcrumbs.items.map(i => {
							return (
								<Link
									key={i.name}
									color='inherit'
									href='#'
									onClick={handleClick}
								>
									{i.name}
								</Link>
							);
					  })
					: null}
				{/* <StyledBreadcrumb
				component='a'
				href='#'
				label='Home'
				icon={<HomeIcon fontSize='small' />}
				onClick={handleClick}
			/>
			<StyledBreadcrumb
			component='a'
			href='#'
			label='Catalog'
			onClick={handleClick}
			/>
			<StyledBreadcrumb
				label='Accessories'
				deleteIcon={<ExpandMoreIcon />}
				onClick={handleClick}
				onDelete={handleClick}
			/> */}
			</Breadcrumbs>
		</Grid>
	);
}
