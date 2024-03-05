import React from 'react';
import '../App.css';
import Header from '../component/Header';
import InvoiceList from '../component/InvoiceList';
import NavBar from '../component/NavBar';

function Home({ mode, toggleMode }) {
	return (
		<>
			<NavBar toggleMode={toggleMode} mode={mode} />
			<section className="app-wrapper">
				<Header mode={mode} />
				<InvoiceList mode={mode} />
			</section>
		</>
	);
}

export default Home;
