import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import InvoiceListItem from './component/InvoiceListItem';

function App() {
	return (
		<main className="app-container font-heading-large">
			<NavBar />
			<section className="app-wrapper">
				<Header />
				<InvoiceListItem />
			</section>
		</main>
	);
}

export default App;
