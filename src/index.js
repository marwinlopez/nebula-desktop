import * as ReactDOM from 'react-dom';
import App from './App.js';
import { GlobalContextProvider } from './context/GlobalContext.jsx';

ReactDOM.render(
	<GlobalContextProvider>
		<App />
	</GlobalContextProvider>,
	document.getElementById('root')
);
