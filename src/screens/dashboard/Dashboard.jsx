import './dashboard.scss';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const Dashboard = () => {
	return (
		<main className='main dashboard'>
			<div className='indicadores dashboard-card'>
				<Card className='card'>
					<CardHeader title='Indicador 1' />
					<CardContent></CardContent>
				</Card>
				<Card className='card'>
					<CardHeader title='Indicador 2' />
					<CardContent></CardContent>
				</Card>
				<Card className='card'>
					<CardHeader title='Indicador 3' />
					<CardContent></CardContent>
				</Card>
				<Card className='card'>
					<CardHeader title='Indicador 4' />
					<CardContent></CardContent>
				</Card>
			</div>
			<div className='container'>Dashboard</div>
		</main>
	);
};

export default Dashboard;
