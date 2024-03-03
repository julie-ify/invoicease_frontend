import React from 'react';
import '../App.css';
import Header from '../component/Header';
import InvoiceList from '../component/InvoiceList';

function Home({ mode }) {
	return (
		<>
			<Header mode={mode} />
			<InvoiceList mode={mode} />
		</>
	);
}

export default Home;
