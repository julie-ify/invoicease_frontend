import React from 'react';
import '../styles/InvoiceListItem.css';

function InvoiceListItem() {
	return (
		<div className='invoice-list-item-container'>
			<div className='invoice-list-item-grid'>
				<h3 className='invoice-list-item-grid-title font-heading-mdx'><span className='font-opacity'>#</span>RT3080</h3>
				<span className='invoice-list-item-grid-username font-heading-sm font-opacity'>Jensen Huang</span>
				<span className='invoice-list-item-grid-date font-heading-sm font-opacity'>Due 19 Aug 2021</span>
				<div className='invoice-list-item-grid-status'>
					<span className='circle'></span>
					<span className='font-green font-heading-mdx font-bold'>Paid</span>
				</div>
				<h3 className='invoice-list-item-grid-amount font-heading-mdx font-bold'>£ 1,800.90</h3>
			</div>
		</div>
	);
}

export default InvoiceListItem;
