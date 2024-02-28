import './App.css';
import Button from './component/Button';
import DateInput from './component/DateInput';
import Select from './component/Select';

function App() {
	return (
		<main className="Ap font-heading-large">
			hello world
			<div>
				<Button type="add-invoice" onClick={() => console.log('added 1 item')}>
					<div className="add-button-content font-bold">
						<div className="add-button-content-right">
							<span>+</span>
						</div>
						<span className="add-button-content-left">New Invoice</span>
					</div>
				</Button>

				<Button type="add-item" onClick={() => console.log('added 1 item')}>
					<span className="font-bold">+ Add New Item</span>
				</Button>

				<Button type="edit-dark" onClick={() => console.log('added 1 item')}>
					<span className="font-bold">Edit</span>
				</Button>

				<Button type="edit-light" onClick={() => console.log('added 1 item')}>
					<span className="font-bold">Edit</span>
				</Button>
				<Select />
				<DateInput />
			</div>
		</main>
	);
}

export default App;
