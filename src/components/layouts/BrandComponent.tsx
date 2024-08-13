import React from 'react'
import Image from '../constants/Image'
const BrandComponent = () => {
	return (
		<div className='text-center text-muted mb-5 mt-3'>
			<img src={Image.orgLogo} className='w-25' alt="" /> <br />
			<small>Copyright 2024</small>
		</div>
	)
}

export default BrandComponent
