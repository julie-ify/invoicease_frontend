import React, { useState } from 'react';
import '../styles/Select.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function Select() {
	const [isVisible, setIsVisible] = useState(false);
	const [isActive, setIsActive] = useState('Net 30 Days');

	const toggleSelect = () => {
		setIsVisible(!isVisible);
	};

	const onChange = (e) => {
		const value = e.target.innerHTML;
		setIsActive(value);
		setIsVisible(!isActive);
	};

	return (
		<section>
			<div className="payment-terms-container font-bold">
				<div
					className={`payment-terms-first-item  ${
						isVisible ? 'active-border' : ''
					}`}
				>
					<span>{isActive}</span>
					<span className="arrow-icon" onClick={toggleSelect}>
						{!isVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
					</span>
				</div>
				<div
					className={isVisible ? 'payment-terms-second-item' : 'hidden'}
				>
					<div className="payment-terms-select">
						<span
							onClick={onChange}
							className={isActive === 'Net 1 Day' ? 'active' : ''}
						>
							Net 1 Day
						</span>
						<span
							onClick={onChange}
							className={isActive === 'Net 7 Days' ? 'active' : ''}
						>
							Net 7 Days
						</span>
						<span
							onClick={onChange}
							className={isActive === 'Net 14 Days' ? 'active' : ''}
						>
							Net 14 Days
						</span>
						<span
							onClick={onChange}
							className={isActive === 'Net 30 Days' ? 'active' : ''}
						>
							Net 30 Days
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Select;
