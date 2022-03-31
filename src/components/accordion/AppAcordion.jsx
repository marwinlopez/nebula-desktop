import React, { useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import NavigatorLink from '../sidebar/NavigatorLink';
import { Typography } from '@mui/material';
import { useGlobalContext } from '../../hooks/useGlobalContext';

const Accordion = withStyles({
	root: {
		// border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		backgroundColor: '#571057',
		fontSize: '10px',
		paddingBottom: 5,
		paddingTop: 5,
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
		'&:hover': {
			backgroundColor: '#5e2d5e',
		},
		'&$expanded': {
			padding: 0,
			fontSize: '10px',
			margin: 'auto',
		},
	},
	expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		// borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		padding: 12,
		'&$expanded': {
			minHeight: 35,
			padding: 15,
		},
	},
	content: {
		'&$expanded': {
			margin: '0px 0',
		},
	},
	expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
	root: {
		minHeight: 12,
		padding: theme.spacing(1),
		'&:hover': {
			backgroundColor: '#002454',
		},
	},
}))(MuiAccordionDetails);

const AppAcordion = ({ route }) => {
	const { accodionExpanded } = useGlobalContext();
	const [expanded, setExpanded] = React.useState(false);
	const [setRoute] = useState(`panel${route.name}`);
	const [setItems] = useState(route.items);
	useEffect(() => {
		const item = setItems.filter(i => i.to === accodionExpanded).length;
		if (item > 0) {
			setExpanded(setRoute);
		} else {
			setExpanded(false);
		}
	}, [accodionExpanded, setItems, setRoute]);

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<Accordion
			square
			expanded={expanded === setRoute}
			onChange={handleChange(setRoute)}
			style={expanded ? { backgroundColor: '#5e2d5e' } : null}
		>
			<AccordionSummary
				style={{ height: 12, minHeight: 12, padding: 5 }}
				aria-controls={`${setRoute}-content`}
				id={`${setRoute}-header`}
			>
				{route.icon}
				<Typography
					style={{
						fontSize: '13px',
						fontWeight: '600',
						color: '#888',
						marginLeft: '10px',
					}}
				>
					{route.name}
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				style={
					expanded
						? { display: 'grid', backgroundColor: '#002454' }
						: { display: 'grid' }
				}
			>
				{route.items.map(item => (
					<NavigatorLink key={item.name} item={item} />
				))}
			</AccordionDetails>
		</Accordion>
	);
};

export default AppAcordion;
