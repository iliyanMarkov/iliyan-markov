import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../data";
import { useScrollAndNavigate } from "../customHooks";
import "./navbar.css";

const Navbar = () => {
	const location = useLocation();
	const [showMenu, setShowMenu] = useState(false);
	const navigateAndScroll = useScrollAndNavigate();

	return (
		<nav className="nav">
			<div
				className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}
			>
				<ul className="nav__list">
					{links.map(
						(
							{ name, icon, path, componentId, dataPath },
							index
						) => {
							const isActive =
								location.hash === `#${componentId}`;

							return (
								<li className="nav__item" key={index}>
									<NavLink
										to={dataPath}
										className={`nav__link ${
											isActive ? "active-nav" : ""
										}`}
										onClick={() => {
											setShowMenu(!showMenu);
											navigateAndScroll(
												dataPath,
												componentId
											);
										}}
									>
										{icon}
										<h3 className="nav__name">{name}</h3>
									</NavLink>
								</li>
							);
						}
					)}
				</ul>
			</div>

			<div
				className={`${
					showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
				}`}
				onClick={() => setShowMenu(!showMenu)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
