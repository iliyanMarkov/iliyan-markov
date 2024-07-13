import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useScrollAndNavigate = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const navigateAndScroll = (path, elementId) => {
		navigate(path);
		scrollToElement(elementId);
	};

	const scrollToElement = (elementId) => {
		setTimeout(() => {
			const element = document.getElementById(elementId);
			element?.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 0);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const currentPath =
							entry.target.getAttribute("data-path");
						if (currentPath && location.pathname !== currentPath) {
							navigate(currentPath, { replace: true });
						}
					}
				});
			},
			{ threshold: 0.2, rootMargin: "0px" }
		);

		document.querySelectorAll("[data-path]").forEach((section) => {
			observer.observe(section);
		});

		const handleScroll = () => {
			const { scrollTop } = document.documentElement;
			if (scrollTop === 0) {
				navigate("/#home", { replace: true });
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, [navigate, location.pathname]);

	return navigateAndScroll;
};

export const usePageScrollNavigation = (topPage, bottomPage) => {
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } =
				document.documentElement;

			if (scrollTop === 0) {
				navigate(topPage);
			} else if (scrollTop + clientHeight >= scrollHeight) {
				navigate(bottomPage);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [navigate]);
};

export const useScrollNavigation = (elementRef, topPage, bottomPage) => {
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			if (!elementRef.current) return;

			const { scrollTop, scrollHeight, clientHeight } =
				elementRef.current;

			if (scrollTop === 0) {
				if (!!topPage) {
					navigate(topPage);
				}
			}
			const atBottom =
				Math.abs(scrollTop + clientHeight - scrollHeight) < 1;

			if (atBottom) {
				if (!!bottomPage) {
					navigate(bottomPage);
				}
			}
		};

		const currentElement = elementRef.current;
		currentElement.addEventListener("scroll", handleScroll);

		return () => currentElement.removeEventListener("scroll", handleScroll);
	}, [navigate, topPage, bottomPage, elementRef]);
};
