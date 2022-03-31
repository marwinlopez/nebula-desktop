import Header from '../header/Header';

const Layout = ({ children }) => {
	return (
		<div className='app'>
			{/* <Header /> */}
			{/* <Sidebar /> */}
			<div className='app-container'>
				{/* <AppBreadcrumbs /> */}
				{children}
			</div>
		</div>
	);
};

export default Layout;
