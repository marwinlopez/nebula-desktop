import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './btnNavigation.scss';

const BtnLink = ({ m }) => {
	const location = useLocation();
	const [selected, setSelected] = useState(m.to);
	useEffect(async () => {
		const pathname = location.pathname;
		setSelected(pathname === m.to);
	}, [location]);
	return (
		<li key={`link-${m.name}`} className={selected ? 'pulse active' : 'pulse'}>
			<Link className='link' to={m.to}>
				{m.icon}
				{m.name}
			</Link>
		</li>
	);
};

export default BtnLink;
