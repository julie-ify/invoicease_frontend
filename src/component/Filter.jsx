import React, { useState } from 'react';
import '../styles/Filter.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { toCapitalizeCase } from '../utilities/formatFunction';

function Filter({ mode }) {
	const [isVisible, setIsVisible] = useState(false);
	const [isActive, setIsActive] = useState('Filter');
	const [isChecked, setIsChecked] = useState('pending');

	const toggleSelect = () => {
		setIsVisible(!isVisible);
	};

	const onChange = (e) => {
		const value = e.target.name;
		setIsChecked(value);
		setIsActive(toCapitalizeCase(value));

		setTimeout(() => {
			setIsVisible(!isVisible);
		}, 1000);
	};

	return (
		<div className="filter-container font-bold">
			<div className={'filter-wrapper'}>
				<span className="visible-content-lg-screen">Filter by status</span>
				<span className="visible-content-sm-screen font-body-md">Filter</span>
				<span className="arrow-icon" onClick={toggleSelect}>
					{!isVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
				</span>
			</div>

			<div className={isVisible ? 'filter-select-wrapper' : 'hidden'}>
				<div
					className={`filter-select ${
						mode === 'light' ? 'filter-select-light' : 'filter-select-dark'
					}`}
				>
					<div className="checkbox-container">
						<input
							type="checkbox"
							name="draft"
							checked={isChecked === 'draft'}
							onChange={onChange}
							className={`filter-checkbox ${
								mode === 'light'
									? 'filter-checkbox-light'
									: 'filter-checkbox-dark'
							}`}
							id="draft"
						/>

						<label
							htmlFor="draft"
							className={
								isActive === 'draft'
									? 'filter-checkbox-label selected-status'
									: 'filter-checkbox-label'
							}
						>
							Draft
						</label>
					</div>
					<div className="checkbox-container">
						<input
							type="checkbox"
							name="pending"
							checked={isChecked === 'pending'}
							onChange={onChange}
							className={`filter-checkbox ${
								mode === 'light'
									? 'filter-checkbox-light'
									: 'filter-checkbox-dark'
							}`}
							id="pending"
						/>

						<label
							htmlFor="pending"
							className={
								isActive === 'pending'
									? 'filter-checkbox-label selected-status'
									: 'filter-checkbox-label'
							}
						>
							Pending
						</label>
					</div>
					<div className="checkbox-container">
						<input
							type="checkbox"
							name="paid"
							checked={isChecked === 'paid'}
							onChange={onChange}
							className={`filter-checkbox ${
								mode === 'light'
									? 'filter-checkbox-light'
									: 'filter-checkbox-dark'
							}`}
							id="paid"
						/>

						<label
							htmlFor="paid"
							className={
								isActive === 'paid'
									? 'filter-checkbox-label selected-status'
									: 'filter-checkbox-label'
							}
						>
							Paid
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filter;
