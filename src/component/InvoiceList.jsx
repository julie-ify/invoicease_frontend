import React from 'react';
import '../styles/InvoiceList.css';
import { AppStateContext } from '../hooks/appState';
import { useContext, useEffect } from 'react';
import InvoiceListItem from './InvoiceListItem';
import Axios from 'axios';
import EmptyIllustration from '../assets/illustration-empty.svg';

function InvoiceList() {
	const { appState, setAppState } = useContext(AppStateContext);

	useEffect(() => {
		const getAllInvoices = async () => {
			try {
				const response = await Axios.get('/data.json');
				setAppState({ ...appState, invoices: response.data });
			} catch (error) {
				console.error(error);
			}
		};

		getAllInvoices();
	}, []);

	return (
		<div className="invoice-list-container">
			{appState.invoices.length > 0 && (
				<ul className="invoice-list-wrapper">
					{appState.invoices.map((invoice) => {
						return <InvoiceListItem invoice={invoice} key={invoice.id} />;
					})}
				</ul>
			)}
			{appState.invoices.length === 0 && (
				<div className="empty-invoice-wrapper">
					<div className="empty-invoice">
						<img
							src={EmptyIllustration}
							className="empty-image"
							alt="Empty-notice"
						/>
						<h2 className="font-heading-md font-bold">There is nothing here</h2>
						<p className="font-opacity font-heading-sm-variant text-center">
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
