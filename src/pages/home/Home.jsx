import React from "react";
import Profile from "../../assets/Profile-Smiling-Black.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useScrollAndNavigate } from "../../customHooks";
import Logo from "../../components/Logo";
import "./home.css";

const Home = () => {
	const navigateAndScroll = useScrollAndNavigate();
	return (
		<section className="home section grid" id="home" data-path="/#home">
			<div className="home__img-logo-wrapper">
				<img
					src={Profile}
					alt="Iliyan Markov profile image"
					className="home__img"
				/>
				<Logo color={"#ffffff90"} className="home__logo" />
			</div>

			<div className="home__content">
				<div className="home__data">
					<h1 className="home__title" data-path="/#home">
						<span>Iliyan Markov</span>
						Web Developer
					</h1>

					<p className="home__description">
						"Hello, I'm a Bulgaria-based front-end developer,
						specializing in crafting seamless, dynamic user
						experiences that bring designs to life. My role involves
						a meticulous blend of aesthetic sensitivity and
						technical skill, enabling me to transform complex
						designs into interactive web interfaces. Utilizing the
						latest web technologies such as HTML5, Sass, TypeScript,
						and modern frameworks like React, Vue, or Angular, I
						ensure that websites are not only visually appealing but
						also highly functional, responsive, and user-friendly. I
						am deeply passionate about my work and the satisfaction
						it provides to my clients and the people I work with.
					</p>

					<Link
						to="/#about"
						className="button"
						onClick={() => {
							navigateAndScroll("/#about", "about");
						}}
					>
						More About Me
						<span className="button__icon">
							<FaArrowRight />
						</span>
					</Link>
				</div>
			</div>

			<div className="color__block"></div>
		</section>
	);
};

export default Home;
