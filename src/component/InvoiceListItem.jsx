import React from 'react';
import '../styles/InvoiceListItem.css';
import {
	currencyConverter,
	toCapitalizeCase,
} from '../utilities/formatFunction';

function InvoiceListItem({ invoice, mode }) {
	let statusBgStyle;
	let statusColor;
	let circleColor;

	switch (invoice.status) {
		case 'paid':
			statusBgStyle = 'status-bg-green';
			statusColor = 'font-green';
			circleColor = 'circle-bg-green';
			break;
		case 'pending':
			statusBgStyle = 'status-bg-orange';
			statusColor = 'font-orange';
			circleColor = 'circle-bg-orange';
			break;
		case 'draft':
			statusBgStyle = 'status-bg-dark';
			statusColor = 'font-dark';
			circleColor = 'circle-bg-dark';
			break;
		default:
			break;
	}
	return (
		<div
			className={`invoice-list-item-container ${
				mode === 'light'
					? 'invoice-list-item-container-light'
					: 'invoice-list-item-container-dark'
			}`}
		>
			<div className="invoice-list-item-upper">
				<h3 className="invoice-list-item-grid-title font-heading-mdx">
					<span
						className={`${
							mode === 'light' ? 'font-opacity-light' : 'font-opacity-dark'
						}`}
					>
						#
					</span>
					{invoice.id}
				</h3>
				<span
					className={`invoice-list-item-grid-username font-body-md text-right ${
						mode === 'light' ? 'font-opacity-light' : 'font-opacity-dark'
					}`}
				>
					{invoice.clientName}
				</span>
			</div>
			<div className="invoice-list-item-lower">
				<span
					className={`invoice-list-item-grid-date font-body-md ${
						mode === 'light'
							? 'font-opacity-grey-light'
							: 'font-opacity-grey-dark'
					}`}
				>
					Due <span>{invoice.paymentDue}</span>
				</span>
				<div className={`invoice-list-item-grid-status ${statusBgStyle}`}>
					<span className={`circle ${circleColor}`}></span>
					<span className={`${statusColor} font-heading-mdx font-bold`}>
						{toCapitalizeCase(invoice.status)}
					</span>
				</div>
				<h3 className="invoice-list-item-grid-amount font-heading-mdx font-bold">
					<span>{currencyConverter(invoice.total)}</span>
				</h3>
			</div>
		</div>
	);
}

export default InvoiceListItem;
