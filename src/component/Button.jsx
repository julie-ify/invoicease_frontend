import React from 'react';
import '../styles/Button.css';

function Button({ onClick, type, children, mode }) {
	let defaultButtonClass = 'default-button';
	let buttonClass;

	switch (type) {
		case 'add-invoice':
			buttonClass = 'add-invoice-button';
			break;
		case 'add-item':
			buttonClass = 'add-item-button';
			break;
		case 'paid':
			buttonClass = 'paid-button';
			break;
		case 'delete':
			buttonClass = 'danger-button';
			break;
		case 'edit-light':
			buttonClass = 'edit-light-button';
			break;
		case 'edit-dark':
			buttonClass = 'edit-dark-button';
			break;
		case 'save':
			buttonClass = 'danger-button';
			break;
		default:
			break;
	}

	return (
		<div>
			<button
				className={`${defaultButtonClass} ${buttonClass} ${buttonClass}-${mode}`}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
}

export default Button;
