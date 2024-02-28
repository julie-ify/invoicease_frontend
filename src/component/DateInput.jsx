import React, { useState } from 'react';
import '../styles/DateInput.css';
import '../styles/Select.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';

function DateInput() {
	const [selectedDay, setSelectedDay] = useState(new Date()); // used to calc day/month/year selected
	const [today, setToday] = useState(new Date().getDate()); // used to calc the date picked
	const [selectedDate, setSelectedDate] = useState(new Date()); // used to calc month
	const [isVisible, setIsVisible] = useState(false); // toggle calender

	const toggleSelect = () => {
		setIsVisible(!isVisible);
	};

	const handleDayClick = (day) => {
		setToday(day);
		const year = selectedDay.getFullYear();
		const month = selectedDay.getMonth();
		const newDay = new Date(year, month, day);
		setSelectedDay(newDay);
	};

	const handlePrevMonth = () => {
		setSelectedDate((prevDate) => {
			const prevMonth = new Date(prevDate);
			prevMonth.setMonth(prevMonth.getMonth() - 1);
			return prevMonth;
		});
	};

	const handleNextMonth = () => {
		setSelectedDate((prevDate) => {
			const nextMonth = new Date(prevDate);
			nextMonth.setMonth(nextMonth.getMonth() + 1);
			return nextMonth;
		});
	};

	const getMonthDays = () => {
		const year = selectedDate.getFullYear();
		const month = selectedDate.getMonth();
		const firstDayOfMonth = new Date(year, month, 1);
		const lastDayOfMonth = new Date(year, month + 1, 0);
		const daysInMonth = lastDayOfMonth.getDate();
		const startingDayOfWeek = firstDayOfMonth.getDay();
		const days = [];

		// Fill in the days before the start of the month
		for (let i = 0; i < startingDayOfWeek; i++) {
			days.push('');
		}

		// Fill in the days of the month
		for (let i = 1; i <= daysInMonth; i++) {
			days.push(i);
		}

		return days;
	};

	const renderCalendarGrid = () => {
		const days = getMonthDays();
		const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

		// Group the days into rows
		const rows = [];
		let cells = [];
		days.forEach((day, index) => {
			if (index % 7 === 0 && cells.length > 0) {
				rows.push(<tr key={rows.length}>{cells}</tr>);
				cells = []; // Clear cells for the next row
			}
			cells.push(
				<td
					key={index}
					className={day === '' ? 'empty' : today === day ? 'selected-day' : ''}
					onClick={() => handleDayClick(day)}
				>
					{day !== '' && day}
				</td>
			);
		});

		// Add the remaining cells
		if (cells.length > 0) {
			rows.push(<tr key={rows.length}>{cells}</tr>);
		}

		return (
			<table className="calendar">
				<thead>
					<tr>
						{weekdays.map((weekday) => (
							<th key={weekday}>{weekday}</th>
						))}
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	};

	return (
		<section className="date-container font-bold">
			<div className="font-bold">
				<div
					className={`calender-first-item ${isVisible ? 'active-border' : ''}`}
				>
					<span>
						{selectedDay.toLocaleString('default', {
							day: '2-digit',
							month: 'short',
							year: 'numeric',
						})}
					</span>
					<span className="calender-icon" onClick={toggleSelect}>
						<BsCalendarDate />
					</span>
				</div>
			</div>
			<div className={isVisible ? 'visible calendar-container' : 'hidden'}>
				<div className="calendar-header">
					<button onClick={handlePrevMonth} className="arrow-icon">
						<MdKeyboardArrowLeft />
					</button>
					<span>
						{selectedDay.toLocaleString('default', {
							day: '2-digit',
							month: 'short',
							year: 'numeric',
						})}
					</span>
					<button onClick={handleNextMonth} className="arrow-icon">
						<MdKeyboardArrowRight />
					</button>
				</div>
				{renderCalendarGrid()}
			</div>
		</section>
	);
}

export default DateInput;
