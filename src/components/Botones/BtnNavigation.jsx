import './btnNavigation.scss';
import { Link, useLocation } from 'react-router-dom';
import BtnLink from './BtnLink';
import { useEffect, useState } from 'react';

export default function BtnNavigation({ moduls }) {
	const location = useLocation();
	const [selected, setSelected] = useState('/');
	useEffect(async () => {
		const pathname = location.pathname;
		setSelected(pathname === '/');
	}, [location]);
	return (
		<nav>
			<ul className='container'>
				<li className={selected ? 'pulse active' : 'pulse'}>
					<Link className='link' to='/'>
						<img src={require('../../img/dashboard.png')} />
						Dashboard
					</Link>
				</li>
				{moduls
					.filter(m => m.isActive)
					.map(m => {
						return (
							<BtnLink key={`btn-link-${m.name}`} m={m} />
							// <li
							// 	key={`link-${m.name}`}
							// 	className='pulse'
							// 	onClick={handleChange(m.name)}
							// >
							// 	<Link className='link' to={m.to}>
							// 		{m.icon}
							// 		{m.name}
							// 	</Link>
							// </li>
						);
					})}
			</ul>
		</nav>
	);
}
