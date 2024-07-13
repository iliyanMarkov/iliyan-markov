import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const PortfolioItem = ({ img, title, details, employer }) => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="portfolio__item">
			<img src={img} alt="" className="portfolio__img" />

			<div className="portfolio__hover" onClick={toggleModal}>
				<h2 className="portfolio__title">{title}</h2>
				<h3 className="portfolio__employer">{"(" + employer + ")"}</h3>
			</div>

			{modal && (
				<div className="portfolio__modal">
					<div className="portfolio__modal-content">
						<IoCloseCircleOutline
							className="modal__close"
							onClick={toggleModal}
						/>

						<h3 className="modal__title">{title}</h3>

						<ul className="modal__list grid">
							{details.map(
								({ icon, title, desc, link }, index) => {
									return (
										<li className="modal__item" key={index}>
											<span className="item__icon">
												{icon}
											</span>

											<div>
												<span className="item__title">
													{title}
												</span>
												{!!link ? (
													<a
														className="item__details"
														href={link}
														target="_blank"
													>
														{desc}
													</a>
												) : (
													<span className="item__details">
														{desc}
													</span>
												)}
											</div>
										</li>
									);
								}
							)}
						</ul>

						<img src={img} alt="" className="modal__img" />
					</div>
				</div>
			)}
		</div>
	);
};

export default PortfolioItem;
