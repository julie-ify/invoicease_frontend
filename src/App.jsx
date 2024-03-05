import './App.css';
import { useContext, useEffect } from 'react';
import { AppStateContext } from './hooks/appState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import Axios from 'axios';
import Error from './component/Error';

function App() {
	const { appState, setAppState } = useContext(AppStateContext);
	const { mode } = appState;

	useEffect(() => {
		const getAllInvoices = async () => {
			try {
				const response = await Axios.get('/data.json');
				setAppState({ ...appState, invoices: response.data });
			} catch (error) {
				console.error(error);
			}
		};

		getAllInvoices();
	}, []);

	const toggleMode = () => {
		let newMode = mode === 'light' ? 'dark' : 'light';
		setAppState((prev) => ({ ...prev, mode: newMode }));
	};

	return (
		<main
			className={`app-container ${
				mode === 'light' ? 'app-container-light' : 'app-container-dark'
			} font-heading-large`}
		>
			<section>
				<Router future={{ v7_startTransition: true }}>
					<Routes>
						<Route
							path="/"
							element={<Home mode={mode} toggleMode={toggleMode} />}
						/>
						<Route
							path={`/invoices/:invoice`}
							element={
								<DetailsPage appState={appState} setAppState={setAppState} toggleMode={toggleMode}/>
							}
						/>
						<Route path="*" element={<Error />} />
					</Routes>
				</Router>
			</section>
		</main>
	);
}

export default App;
