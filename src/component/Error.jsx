import React from 'react';
import '../styles/Error.css';

function Error() {
	return (
		<div className="app-wrapper">
			<section className="error-container">
				<div className="error-wrapper">
					<h2 className="font-heading-md font-bold">Opps!</h2>
					<p className="font-heading-mdx text-center">
						The requested URL was not found on this server
					</p>
					<em className="font-opacity-light">Page Not Found</em>
				</div>
			</section>
		</div>
	);
}

export default Error;
