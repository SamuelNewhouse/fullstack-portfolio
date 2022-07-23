import React from 'react'
import {images} from '../../constants'

import './Navbar.scss'

// Left off @
// https://youtu.be/3HNyXCPDQ7Q?t=2155

const Navbar = () => {
	return (
		<nav>
			<div>
				<img src={images.logo} alt="logo" />
			</div>
		</nav>
	)
}

export default Navbar