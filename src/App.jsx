import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import InvoiceList from './component/InvoiceList';
import { useContext } from 'react';
import { AppStateContext } from './hooks/appState';

function App() {
	const { appState, setAppState } = useContext(AppStateContext);

	const toggleMode = () => {
		let mode = appState.mode === 'light' ? 'dark' : 'light';
		setAppState((prev) => ({ ...prev, mode }));
	};

	return (
		<main
			className={`app-container ${
				appState.mode === 'light' ? 'app-container-light' : 'app-container-dark'
			} font-heading-large`}
		>
			<NavBar toggleMode={toggleMode} mode={appState.mode} />
			<section className="app-wrapper">
				<Header mode={appState.mode} />
				<InvoiceList mode={appState.mode} />
			</section>
		</main>
	);
}

export default App;
