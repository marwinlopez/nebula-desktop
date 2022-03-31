import { Typography } from '@material-ui/core';
import { useEffect, useRef } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import './navigatorLink.scss';
const NavigatorLink = ({ item, ...props }) => {
	const resolved = useResolvedPath(item.to);
	const match = useMatch({ path: resolved.pathname, end: true });
	const { appNavigation } = useGlobalContext();
	const link = useRef(null);
	useEffect(() => {
		appNavigation(link, match);
	}, [appNavigation, match]);

	return (
		<Link
			className={`${match ? 'active' : 'not-active'}`}
			to={item.to}
			hidden={item.showInDrawer}
			ref={link}
			{...props}
		>
			<li>
				{item.icon}
				<Typography className='span'>{item.name}</Typography>
			</li>
		</Link>
	);
};

export default NavigatorLink;
// route.items ? (
//   <Accordion key={route.name} square expanded={expanded === `panel${route.name}`} onChange={handleChange(`panel${route.name}`)}>
//     <AccordionSummary style={{ height: 12, minHeight: 12, padding: 5 }} aria-controls={`panel${route.name}-content`} id={`panel${route.name}-header`}>
//       <Typography style={{
//         fontSize: 12, fontWeight: "600",
//         color: "#888"
//       }}>{route.name}</Typography>
//     </AccordionSummary>
//     <AccordionDetails style={{ display: 'grid' }}>
//       {route.items.map(item =>
//         <NavigatorLink key={item.name} item={item} />)}
//     </AccordionDetails>
//   </Accordion>
// ) : (
//   <NavigatorLink key={route.name} item={route} />
// )
