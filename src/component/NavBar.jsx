import React from 'react';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.jpg';
import MoonIcon from '../assets/icon-moon.svg';
import SunIcon from '../assets/icon-sun.svg';
import '../styles/NavBar.css';

function NavBar({ toggleMode, mode }) {
	return (
		<section className="navbar-container">
			<div className="navbar-wrapper">
				<div className="navbar-content">
					<div className="navbar-left">
						<div className="logo-bg">
							<div className="logo-bg-down" />
							<div className="logo-wrapper">
								<img src={Logo} alt="Logo" className="logo" />
							</div>
						</div>
						<span className="mode-icon" onClick={toggleMode}>
							{mode === 'light' && <img src={MoonIcon} alt="Mode" />}
							{mode === 'dark' && <img src={SunIcon} alt="Mode" />}
						</span>
					</div>
					<div className="navbar-right">
						<img src={Avatar} alt="User Avatar" className="user-avatar" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default NavBar;
