import './App.css';
import NavBar from './component/NavBar';
import { useContext } from 'react';
import { AppStateContext } from './hooks/appState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';

function App() {
	const { appState, setAppState } = useContext(AppStateContext);

	const toggleMode = () => {
		let mode = appState.mode === 'light' ? 'dark' : 'light';
		setAppState((prev) => ({ ...prev, mode }));
	};

	console.log(appState)

	return (
		<main
			className={`app-container ${
				appState.mode === 'light' ? 'app-container-light' : 'app-container-dark'
			} font-heading-large`}
		>
			<NavBar toggleMode={toggleMode} mode={appState.mode} />
			<section className="app-wrapper">
				<Router future={{ v7_startTransition: true }}>
					<Routes>
						<Route path="/" element={<Home mode={appState.mode} />} />
						<Route path="/" element={<DetailsPage mode={appState.mode} />} />
					</Routes>
				</Router>
			</section>
		</main>
	);
}

export default App;
