import React, { createContext, useState } from 'react';
export const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
	const [appState, setAppState] = useState({
		invoices: [],
		mode: 'light'
	});

	return (
		<AppStateContext.Provider value={{ appState, setAppState }}>
			{children}
		</AppStateContext.Provider>
	);
};

export default AppStateProvider;
