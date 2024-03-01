import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import Button from './component/Button';
import DateInput from './component/DateInput';
import Select from './component/Select';
import Filter from './component/Filter';

function App() {
	return (
		<main className="app-container font-heading-large">
			<NavBar />
			<section className="app-wrapper">
				<Header />
			</section>
		</main>
	);
}

export default App;
