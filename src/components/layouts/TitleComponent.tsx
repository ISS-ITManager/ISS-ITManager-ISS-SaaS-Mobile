import React, { useState, useEffect } from 'react'

const TitleComponent = ({ title, subtitle }) => {

	return (
		<>
			<div className="row">
				<div className="col-12 mb-2">
					<span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'> {title}  </span>
					{subtitle &&
						<span className='badge bg-primary rounded-pill animate__animated animate__rubberBand'>  / {subtitle}  </span>
					}
				</div>
			</div>
		</>
	)
}

export default TitleComponent
