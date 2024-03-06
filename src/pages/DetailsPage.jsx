import React from 'react';
import { useLocation } from 'react-router-dom';
import EmptyIllustration from '../assets/illustration-empty.svg';
import LeftArrow from '../assets/icon-arrow-left.svg';
import NavBar from '../component/NavBar';
import '../styles/DetailsPage.css';
import {
	dateFormat,
	toCapitalizeCase,
	currencyConverter,
} from '../utilities/formatFunction';
import { useNavigate } from 'react-router-dom';

function DetailsPage({ appState, toggleMode }) {
	const location = useLocation();
	const nagivate = useNavigate();
	const path = location.pathname.split('/').slice(-1).join(); // retrieve the slug from the path
	const invoiceToView = appState.invoices.find(
		(invoice) => invoice.id === path
	);
	const { invoices, mode } = appState;

	return (
		<>
			<NavBar toggleMode={toggleMode} mode={mode} />
			<section className="app-wrapper">
				{invoices.length > 0 && (
					<div>
						{invoiceToView && (
							<div>
								<div className="back-button-container">
									<div className="back-button-wrapper">
										<img
											src={LeftArrow}
											alt="Go back button"
											onClick={() => nagivate(-1)}
											className='arrow-button'
										/>
										<h4 className="font-heading-sm">Go back</h4>
									</div>
								</div>
								<section className="details-container">
									<div
										className={`status-header-container ${
											mode === 'light'
												? 'status-header-container-light'
												: 'status-header-container-dark'
										}`}
									>
										<span
											className={`font-body-md ${
												mode === 'light'
													? 'font-opacity-grey-light'
													: 'font-opacity-grey-dark'
											}`}
										>
											Status
										</span>
										<div className="status-item ">
											<div
												className={`invoice-list-item-grid-status status-bg-${
													invoiceToView.status
												}-${mode === 'light' ? 'light' : 'dark'}`}
											>
												<span
													className={`circle circle-bg-${
														invoiceToView.status
													}-${mode === 'light' ? 'light' : 'dark'}`}
												></span>
												<span
													className={`font-heading-mdx font-bold font-${
														invoiceToView.status
													}-${mode === 'light' ? 'light' : 'dark'}`}
												>
													{toCapitalizeCase(invoiceToView.status)}
												</span>
											</div>
										</div>
									</div>
									<div
										className={`detail-wrapper ${
											mode === 'light'
												? 'status-header-container-light'
												: 'status-header-container-dark'
										}`}
									>
										<div className="detail-description-first-wrapper">
											<div className="detail-description-first">
												<h3 className="font-heading-sm">
													<span className={`font-opacity-light`}>#</span>
													{invoiceToView.id}
												</h3>
												<h4
													className={`font-body-md ${
														mode === 'light'
															? 'font-opacity-grey-light'
															: 'font-opacity-grey-dark'
													}`}
												>
													{invoiceToView.description}
												</h4>
											</div>
											<div
												className={`detail-description-second font-body-md ${
													mode === 'light'
														? 'font-opacity-grey-light'
														: 'font-opacity-grey-dark'
												}`}
											>
												<h4 className="font-body-md">
													{invoiceToView.senderAddress.street}
												</h4>
												<h4 className="font-body-md">
													{invoiceToView.senderAddress.city}
												</h4>
												<h4 className="font-body-md">
													{invoiceToView.senderAddress.postCode}
												</h4>
												<h4 className="font-body-md">
													{invoiceToView.senderAddress.country}
												</h4>
											</div>
										</div>
										<div className="detail-description-info-wrapper">
											<div className="detail-description-info-first">
												<div className="detail-description-info-inner">
													<h4
														className={`font-body-md ${
															mode === 'light'
																? 'font-opacity-grey-light'
																: 'font-opacity-grey-dark'
														}`}
													>
														Invoice Date
													</h4>

													<h3 className="font-heading-sm">
														{dateFormat(invoiceToView.createdAt)}
													</h3>
												</div>
												<div className="detail-description-info-inner">
													<h4
														className={`font-body-md ${
															mode === 'light'
																? 'font-opacity-grey-light'
																: 'font-opacity-grey-dark'
														}`}
													>
														Payment Due
													</h4>
													<h3 className="font-heading-sm">
														{dateFormat(invoiceToView.paymentDue)}
													</h3>
												</div>
											</div>

											<div className="detail-description-info-inner">
												<h4
													className={`font-body-md ${
														mode === 'light'
															? 'font-opacity-grey-light'
															: 'font-opacity-grey-dark'
													}`}
												>
													Bill To
												</h4>
												<h3 className="font-heading-sm">
													{invoiceToView.clientName}
												</h3>
												<div
													className={`detail-description-user-info font-body-md ${
														mode === 'light'
															? 'font-opacity-grey-light'
															: 'font-opacity-grey-dark'
													}`}
												>
													<h4 className="font-body-md">
														{invoiceToView.clientAddress.street}
													</h4>
													<h4 className="font-body-md">
														{invoiceToView.clientAddress.city}
													</h4>
													<h4 className="font-body-md">
														{invoiceToView.clientAddress.postCode}
													</h4>
													<h4 className="font-body-md">
														{invoiceToView.clientAddress.country}
													</h4>
												</div>
											</div>

											<div className="detail-description-info-inner">
												<h4
													className={`font-body-md ${
														mode === 'light'
															? 'font-opacity-grey-light'
															: 'font-opacity-grey-dark'
													}`}
												>
													Sent to
												</h4>
												<h3 className="font-heading-sm">
													{invoiceToView.clientEmail}
												</h3>
											</div>
										</div>

										<div className="items-container">
											{/* large screen */}
											<div
												className={`items-wrapper-large ${
													mode === 'light'
														? 'items-wrapper-light'
														: 'items-wrapper-dark'
												}`}
											>
												<div
													className={`table-head ${
														mode === 'light'
															? 'font-opacity-grey-light'
															: 'font-opacity-grey-dark'
													}`}
												>
													<h4 className="font-body-md top-name">Item Name</h4>
													<h4 className="font-body-md top-qty">QTY.</h4>
													<h4 className="font-body-md top-price">Price</h4>
													<h4 className="font-body-md top-total">Total</h4>
												</div>
												{invoiceToView.items.map((item, i) => (
													<div className="items-top-large" key={i}>
														<h3 className="font-heading-sm top-name">{item.name}</h3>

														<h3 className="font-heading-sm font-opacity-grey-light top-qty">
															{item.quantity}
														</h3>

														<h3 className="font-heading-sm font-opacity-grey-light top-price">
															{currencyConverter(item.price)}
														</h3>

														<h3 className="font-heading-mdx top-total">
															{currencyConverter(item.quantity * item.price)}
														</h3>
													</div>
												))}
											</div>

											{/* small screen */}
											<div
												className={`items-wrapper-small ${
													mode === 'light'
														? 'items-wrapper-light'
														: 'items-wrapper-dark'
												}`}
											>
												{invoiceToView.items.map((item, i) => (
													<div className="items-top-small" key={i}>
														<div className="items-left">
															<h3 className="font-heading-sm">{item.name}</h3>
															<h3 className="font-heading-sm font-opacity-grey-light">
																{item.quantity} x{' '}
																{currencyConverter(item.price)}
															</h3>
														</div>
														<div className="item-right">
															<h3 className="font-heading-mdx">
																{currencyConverter(item.quantity * item.price)}
															</h3>
														</div>
													</div>
												))}
											</div>
											<div
												className={`items-bottom ${
													mode === 'light'
														? 'items-bottom-light'
														: 'items-bottom-dark'
												}`}
											>
												<span className="font-heading-sm font-white">
													Grand Total
												</span>
												<h3 className="amount-font font-white">
													{currencyConverter(invoiceToView.total)}
												</h3>
											</div>
										</div>
									</div>
								</section>
							</div>
						)}
						{!invoiceToView && (
							<div className="empty-invoice-wrapper">
								<div className="empty-invoice">
									<img
										src={EmptyIllustration}
										className="empty-image"
										alt="Empty-notice"
									/>
									<h2 className="font-heading-md font-bold">
										There is nothing here
									</h2>
									<p
										className={`font-heading-sm-variant text-center ${
											mode === 'light'
												? 'font-opacity-light'
												: 'font-opacity-dark'
										}`}
									>
										The invoive with the id {path} does not exit
									</p>
								</div>
							</div>
						)}
					</div>
				)}
			</section>
		</>
	);
}

export default DetailsPage;
