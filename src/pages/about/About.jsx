import React from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/iliyan-markov-cv.pdf";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import "./about.css";
import PDFDocument from "../../components/PDFDocument";
import { pdf } from "@react-pdf/renderer";

const About = () => {
	const handleDownload = async () => {
		const doc = <PDFDocument />;
		const asPdf = pdf([]);
		asPdf.updateContainer(doc);
		const blob = await asPdf.toBlob();
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "iliyan-markov-cv.pdf";
		a.click();
	};

	return (
		<main className="section container" id="about" data-path="/#about">
			<section className="about">
				<h2 className="section__title">
					About <span>Me</span>
				</h2>

				<div className="about__container grid">
					<div className="about__info">
						<h3 className="section__subtitle">Personal Info</h3>

						<ul className="info__list grid">
							<Info />
						</ul>

						<a
							className="button"
							data-path="/#about"
							onClick={handleDownload}
						>
							Download Cv
							<span className="button__icon">
								<FaDownload />
							</span>
						</a>
					</div>

					<div className="stats grid">
						<Stats />
					</div>
				</div>
			</section>

			<div className="separator"></div>

			<section className="skills">
				<h3 className="section__subtitle subtitle__center">
					My Skills
				</h3>

				<div className="skills__container grid">
					<Skills />
				</div>
			</section>

			<div className="separator"></div>

			<section className="resume">
				<h3 className="section__subtitle subtitle__center">
					Experience & Education
				</h3>

				<div className="resume__container grid">
					<div className="resume__data">
						{resume.map((val) => {
							if (val.category === "experience") {
								return <ResumeItem key={val.id} {...val} />;
							}
						})}
					</div>

					<div className="resume__data">
						{resume.map((val) => {
							if (val.category === "education") {
								return <ResumeItem key={val.id} {...val} />;
							}
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
