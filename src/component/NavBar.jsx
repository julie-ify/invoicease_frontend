import React from 'react';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.jpg';
import MoonIcon from '../assets/icon-moon.svg';
import SunIcon from '../assets/icon-sun.svg';
import '../styles/NavBar.css';

function NavBar() {
	return (
		<section className='navbar-container'>
			<div className='navbar-wrapper'>
				<div className='navbar-content'>
					<div className='navbar-left'>
						<img src={Logo} alt="Logo" />
						<span className='mode-icon'>
							<img src={MoonIcon} alt="" />
							{/* <img src={Illustration} alt="" /> */}
						</span>
					</div>
					<div className='navbar-right'>
						<img src={Avatar} alt="User Avatar" className='user-avatar' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default NavBar;
