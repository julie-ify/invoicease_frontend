import React from 'react';

function Input() {
	return (
		<section>
			<div className="Form-group">
				<div className="flex flex-row justify-between">
					<label
						htmlFor="name"
						// className={`${!!error.nameError ? 'Error-mode' : ''}`}
					>
						Payment Terms
					</label>
					{/* <span className="Form-errorMsg">{error.nameError}</span> */}
				</div>
				<input
					placeholder="Alexei Ward"
					className={`Form-input`}
					// className={`Form-input ${
					// 	!!error.nameError ? 'Input-error-mode' : ''
					// }`}
					type="text"
					id="name"
					name="name"
					// onChange={onChangeHandler}
				/>
			</div>
		</section>
	);
}

export default Input;
