import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import InvoiceList from './component/InvoiceList';
import AppStateProvider from './hooks/appState';


function App() {
	return (
		<AppStateProvider>
			<main className="app-container font-heading-large">
				<NavBar />
				<section className="app-wrapper">
					<Header />
					<InvoiceList />
				</section>
			</main>
		</AppStateProvider>
	);
}

export default App;
