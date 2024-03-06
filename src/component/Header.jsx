import React from 'react';
import '../styles/Header.css';
import Button from './Button';
import Filter from './Filter';
import PlusButton from '../assets/icon-plus.svg';

function Header({ mode }) {
	return (
		<div className="header-container">
			<div className="header-left">
				<h1 className="font-heading-md">Invoices</h1>
				<div
					className={`${
						mode === 'light' ? 'font-opacity-grey-light' : 'font-opacity-grey-dark'
					}`}
				>
					<span className="visible-content-lg-screen">
						There are 7 total invoices
					</span>
					<span className="visible-content-sm-screen">7 invoices</span>
				</div>
			</div>
			<div className="header-right">
				<div>
					<Filter mode={mode} />
				</div>
				<div>
					<Button
						type="add-invoice"
						onClick={() => console.log('added 1 item')}
					>
						<div className="add-button-content font-bold">
							<div className="add-button-content-right">
								<img src={PlusButton} alt="Plus button" />
							</div>
							<span className="add-button-content-left visible-content-lg-screen">
								New Invoice
							</span>
							<span className="add-button-content-left visible-content-sm-screen">
								New
							</span>
						</div>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;
