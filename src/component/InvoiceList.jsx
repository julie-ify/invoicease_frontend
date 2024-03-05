import React from 'react';
import '../styles/InvoiceList.css';
import { AppStateContext } from '../hooks/appState';
import { useContext } from 'react';
import InvoiceListItem from './InvoiceListItem';
import EmptyIllustration from '../assets/illustration-empty.svg';
import { useNavigate } from 'react-router-dom';

function InvoiceList() {
	const { appState} = useContext(AppStateContext);
	const mode = appState.mode;
	const invoices = appState.invoices;
	const navigate = useNavigate();

	return (
		<div className="invoice-list-container">
			{appState.invoices.length > 0 && (
				<ul className="invoice-list-wrapper">
					{invoices.map((invoice) => {
						return (
							<InvoiceListItem
								invoice={invoice}
								key={invoice.id}
								mode={mode}
								handleView={() => navigate(`/invoices/${invoice.id}`)}
							/>
						);
					})}
				</ul>
			)}
			{invoices.length === 0 && (
				<div className="empty-invoice-wrapper">
					<div className="empty-invoice">
						<img
							src={EmptyIllustration}
							className="empty-image"
							alt="Empty-notice"
						/>
						<h2 className="font-heading-md font-bold">There is nothing here</h2>
						<p
							className={`font-heading-sm-variant text-center ${
								mode === 'light' ? 'font-opacity-light' : 'font-opacity-dark'
							}`}
						>
							Create an invoice by clicking the{' '}
							<span className="font-bold">New</span> button and get started
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default InvoiceList;
