import React from 'react';
import '../styles/Header.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Button from './Button';
import Filter from './Filter';

function Header({ mode }) {
	return (
		<div className="header-container">
			<div className="header-left">
				<h2 className="font-heading-md">Invoices</h2>
				<span
					className={`${
						mode === 'light' ? 'font-opacity-light' : 'font-opacity-dark'
					}`}
				>
					7 invoices
				</span>
			</div>
			<div className="header-right">
				<div>
					<Filter />
				</div>
				<div>
					<Button
						type="add-invoice"
						onClick={() => console.log('added 1 item')}
					>
						<div className="add-button-content font-bold">
							<div className="add-button-content-right">
								<span>+</span>
							</div>
							<span className="add-button-content-left">New</span>
						</div>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;
