import React from 'react';
import { FaChevronRight } from 'react-icons/fa'; // Using Font Awesome for a chevron icon

const TitleComponent = ({ title, subtitle }) => {
	return (
		<div className="row">
			<div className="col-12 mb-3">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb bg-light p-3 rounded shadow-sm">
						<li className="breadcrumb-item">
							<span className="badge bg-primary rounded-pill px-3 py-2 animate__animated animate__fadeIn">
								{title}
							</span>
						</li>
						{subtitle && (
							<>
								<li className="breadcrumb-separator">
									<FaChevronRight className="text-muted mx-2" />
								</li>
								<li className="breadcrumb-item active">
									<span className="badge bg-secondary rounded-pill px-3 py-2 animate__animated animate__fadeIn">
										{subtitle}
									</span>
								</li>
							</>
						)}
					</ol>
				</nav>
			</div>
		</div>
	);
}

export default TitleComponent;
