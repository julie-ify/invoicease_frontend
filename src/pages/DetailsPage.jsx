import React from 'react';
import { useLocation } from 'react-router-dom';
import EmptyIllustration from '../assets/illustration-empty.svg';
import LeftArrow from '../assets/icon-arrow-left.svg';
import NavBar from '../component/NavBar';
import '../styles/DetailsPage.css';
import { toCapitalizeCase } from '../utilities/formatFunction';
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
										/>
										<h4 className="font-heading-mdx">Go back</h4>
									</div>
								</div>
								<section>
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
						<span></span>
					</div>
				)}
			</section>
		</>
	);
}

export default DetailsPage;
