import React from 'react';
import '../styles/InvoiceListItem.css';
import {
	currencyConverter,
	toCapitalizeCase,
	dateFormat,
} from '../utilities/formatFunction';
import ArrowRight from '../assets/icon-arrow-right.svg';

function InvoiceListItem({ invoice, mode, handleView }) {
	let statusBgStyle;
	let statusColor;
	let circleColor;

	switch (invoice.status) {
		case 'paid':
			statusBgStyle = 'status-bg-paid';
			statusColor = 'font-paid';
			circleColor = 'circle-bg-paid';
			break;
		case 'pending':
			statusBgStyle = 'status-bg-pending';
			statusColor = 'font-pending';
			circleColor = 'circle-bg-pending';
			break;
		case 'draft':
			statusBgStyle = 'status-bg-draft';
			statusColor = 'font-draft';
			circleColor = 'circle-bg-draft';
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
			onClick={handleView}
		>
			<div className="invoice-list-item-grid">
				<h3 className="invoice-list-item-grid-title font-heading-mdx grid-item">
					<span className={`font-opacity-light`}>#</span>
					{invoice.id}
				</h3>
				<span
					className={`grid-item invoice-list-item-grid-date font-body-md ${
						mode === 'light'
							? 'font-opacity-grey-light'
							: 'font-opacity-grey-dark'
					}`}
				>
					Due <span>{dateFormat(invoice.paymentDue)}</span>
				</span>
				<span
					className={`grid-item invoice-list-item-grid-username font-body-md ${
						mode === 'light' ? 'font-opacity-light' : 'font-opacity-dark'
					}`}
				>
					{invoice.clientName}
				</span>
				<h3 className="grid-item invoice-list-item-grid-amount font-heading-mdx font-bold">
					<span>{currencyConverter(invoice.total)}</span>
				</h3>
				<div
					className={`grid-item invoice-list-item-grid-status ${statusBgStyle}-${
						mode === 'light' ? 'light' : 'dark'
					}`}
				>
					<span
						className={`circle ${circleColor}-${
							mode === 'light' ? 'light' : 'dark'
						}`}
					></span>
					<span
						className={`font-heading-mdx font-bold ${statusColor}-${
							mode === 'light' ? 'light' : 'dark'
						}`}
					>
						{toCapitalizeCase(invoice.status)}
					</span>
				</div>
				<div className="grid-item visible-content-lg-screen">
					<img src={ArrowRight} alt="Arrow" />
				</div>
			</div>
		</div>
	);
}

export default InvoiceListItem;
