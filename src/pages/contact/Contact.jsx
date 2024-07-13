import React, { useState } from "react";

import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF } from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
	const [emailDetails, setEmailDetails] = React.useState({
		name: "",
		subject: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setEmailDetails({
			...emailDetails,
			[e.target.name]: e.target.value,
		});
	};

	const handleSendEmail = () => {
		const { name, subject, email, message } = emailDetails;
		const recipientEmail = "ilkomarkov000@gmail.com";
		const body = `Name: ${name}.
        Email: ${email}
        Message: ${message}`;
		const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoLink;
	};
	return (
		<section className="contact section" id="contact" data-path="/#contact">
			<h2 className="section__title" data-path="/#contact">
				Get In <span>Touch</span>
			</h2>

			<div className="contact__container container grid">
				<div className="contact__data">
					<h3 className="contact__title">Reach Out</h3>

					<p className="contact__description">
						Feel free to get in touch with me. I am always open to
						discussing new projects, creative ideas or opportunities
						to be part of your visions.
					</p>

					<div className="contact__info">
						<div className="info__item">
							<FaEnvelopeOpen className="info__icon" />

							<div>
								<span className="info__title">Email</span>
								<h4 className="info__desc">
									ilkomarkov000@gmail.com
								</h4>
							</div>
						</div>

						<div className="info__item">
							<FaPhoneSquareAlt className="info__icon" />

							<div>
								<span className="info__title">Phone</span>
								<h4 className="info__desc">+359 89 6913944</h4>
							</div>
						</div>
					</div>

					{/* <div className="contact__socials">
						<a
							href="https://facebook.com"
							className="contact__social-link"
						>
							<FaFacebookF />
						</a>
					</div> */}
				</div>

				<form className="contact__form">
					<div className="form__input-group">
						<div className="form__input-div">
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="form__control"
								onChange={handleChange}
							/>
						</div>

						<div className="form__input-div">
							<input
								type="email"
								name="email"
								placeholder="Your Email"
								className="form__control"
								onChange={handleChange}
							/>
						</div>

						<div className="form__input-div">
							<input
								type="text"
								name="subject"
								placeholder="Your Subject"
								className="form__control"
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="form__input-div">
						<textarea
							name="message"
							placeholder="Your Message"
							className="form__control textarea"
							onChange={handleChange}
						></textarea>
					</div>

					<button className="button" onClick={handleSendEmail}>
						Send Message
						<span className="button__icon contact__button-icon">
							<FiSend />
						</span>
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
