import {
	FaHome,
	FaUser,
	FaFolderOpen,
	FaEnvelopeOpen,
	FaBriefcase,
	FaCode,
	FaReact,
	FaNodeJs,
	FaWordpressSimple,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { BsFiletypeScss } from "react-icons/bs";
import { GrHtml5 } from "react-icons/gr";
import { SiAngularjs, SiRedux } from "react-icons/si";

import MobloxProject from "./assets/moblox-project.png";
import ForestHolidaysProject from "./assets/forest-holidays-project.png";
import DealstackProject from "./assets/dealstack-project.png";
import SoloTrvlrProject from "./assets/solotrvlr-project.png";
import OzanProject from "./assets/ozan-project.png";
import OpenPaydProject from "./assets/openpayd-project.png";
import WexselProject from "./assets/wexsel-project.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

const typeScriptSVG = (
	<svg
		className="skills-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 50 50"
		width="50px"
		height="50px"
	>
		<path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z" />
	</svg>
);

export const calculateAge = (year, month, day) => {
	const currentDate = new Date();
	const birthDate = new Date(year, month - 1, day);
	let age = currentDate.getFullYear() - birthDate.getFullYear();
	const m = currentDate.getMonth() - birthDate.getMonth();

	if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
		age--;
	}

	return age + " Years";
};

export const links = [
	{
		id: 1,
		name: "Home",
		icon: <FaHome className="nav__icon" />,
		path: "/",
		componentId: "home",
		dataPath: "/#home",
	},

	{
		id: 2,
		name: "About",
		icon: <FaUser className="nav__icon" />,
		path: "/about",
		componentId: "about",
		dataPath: "/#about",
	},

	{
		id: 3,
		name: "Portfolio",
		icon: <FaFolderOpen className="nav__icon" />,
		path: "/portfolio",
		componentId: "portfolio",
		dataPath: "/#portfolio",
	},

	{
		id: 4,
		name: "Contact",
		icon: <FaEnvelopeOpen className="nav__icon" />,
		path: "/contact",
		componentId: "contact",
		dataPath: "/#contact",
	},
];

export const personalInfo = [
	{
		id: 1,
		title: "First Name: ",
		description: "Iliyan",
	},

	{
		id: 2,
		title: "Last Name: ",
		description: "Markov",
	},

	{
		id: 3,
		title: "Age: ",
		description: calculateAge(1998, 6, 25),
	},

	{
		id: 4,
		title: "Nationality: ",
		description: "Bulgarian",
	},
	{
		id: 5,
		title: "Address: ",
		description: "Varna, Bulgaria",
	},

	{
		id: 6,
		title: "Phone: ",
		description: "+359 89 6913944",
	},

	{
		id: 7,
		title: "Email: ",
		description: "ilkomarkov000@gmail.com",
	},
	{
		id: 8,
		title: "Languages: ",
		description: "Bulgarian, English",
	},
];

export const stats = [
	{
		id: 1,
		no: "5+",
		title: "Years of <br /> Experience",
	},
	{
		id: 2,
		no: "43+",
		title: "Happy <br /> Customers",
	},
	{
		id: 3,
		no: "31+",
		title: "Completed <br /> Projects",
	},
	{
		id: 4,
		no: "23+",
		title: "Improved <br /> Websites",
	},
];

export const resume = [
	{
		id: 1,
		category: "experience",
		icon: <FaBriefcase />,
		year: "2019 - 2021",
		title: "React.js Developer <span> Sugarhigh Studio </span>",
		desc: [
			"Developing and maintaining web applications using React.js.",
			"Collaborating with the designers, and the clients to create user-friendly websites.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Actively contributing to the planning and strategy phases of projects. This involves advocating for best practices in web development, accessibility, and SEO to ensure that our projects not only look great but also rank well and are accessible to all users. ",
		],
	},

	{
		id: 2,
		category: "experience",
		icon: <FaBriefcase />,
		year: "2021 - 2022",
		title: "Web Developer <span> Medlink Students </span>",
		desc: [
			"Developing and maintaining web applications using mainly React.js, WordPress, PHP and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, marketing and other developers to maintain and continue to improve the company application.",
			"Leading a team of developers to help create a platform in which students can become doctors.",
			"Constantly improving the conversion rate of the company.",
		],
	},

	{
		id: 3,
		category: "education",
		icon: <FaBriefcase />,
		year: "2022 - 2023",
		title: "Front-End Developer <span> All Front </span>",
		desc: [
			"Developing and maintaining web applications using React.js, Angular, GraphQL and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, clients, other companies and other developers to create high-quality products.",
			"Helping multiple startup companies to efficiently begin their websites, apps and businesses.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		id: 4,
		category: "education",
		icon: <FaBriefcase />,
		year: "2023 - PRESENT",
		title: "Front-End Developer <span> Law Business Research </span>",
		desc: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Developing and maintaining multiple projects and company businesses.",
			"Collaborating closely with UX/UI designers and back-end developers, translating design concepts and requirements into fully realized features. ",
		],
	},
];

export const skills = [
	{
		id: 1,
		title: "HTML5",
		percentage: "100",
		icon: <GrHtml5 className="skills-icon" />,
	},

	{
		id: 2,
		title: "TypeScript",
		percentage: "100",
		icon: typeScriptSVG,
	},

	{
		id: 3,
		title: "Sass",
		percentage: "100",
		icon: <BsFiletypeScss className="skills-icon" />,
	},

	{
		id: 4,
		title: "React",
		percentage: "100",
		icon: <FaReact className="skills-icon" />,
	},

	{
		id: 5,
		title: "Angular",
		percentage: "100",
		icon: <SiAngularjs className="skills-icon" />,
	},

	{
		id: 6,
		title: "Redux",
		percentage: "100",
		icon: <SiRedux className="skills-icon" />,
	},

	{
		id: 7,
		title: "Node",
		percentage: "100",
		icon: <FaNodeJs className="skills-icon" />,
	},

	{
		id: 8,
		title: "Wordpress",
		percentage: "100",
		icon: <FaWordpressSimple className="skills-icon" />,
	},
];

export const portfolio = [
	{
		id: 1,
		employer: "All Front",
		img: MobloxProject,
		title: "Moblox",
		details: [
			{
				icon: <FiFileText />,
				title: "Project: ",
				desc: "Mobile Services",
			},
			{
				icon: <FiUser />,
				title: "Client: ",
				desc: "Piers Linney",
			},
			{
				icon: <FaCode />,
				title: "Technologies: ",
				desc: "React, TypeScript",
			},
			{
				icon: <FiExternalLink />,
				title: "Preview: ",
				desc: "moblox.com",
				link: "https://moblox.com",
			},
		],
	},

	{
		id: 2,
		employer: "All Front",
		img: ForestHolidaysProject,
		title: "Forest Holidays",
		details: [
			{
				icon: <FiFileText />,
				title: "Project: ",
				desc: "Lodging Provider",
			},
			{
				icon: <FiUser />,
				title: "Client: ",
				desc: "Peter Anderson",
			},
			{
				icon: <FaCode />,
				title: "Technologies: ",
				desc: "React, TypeScript",
			},
			{
				icon: <FiExternalLink />,
				title: "Preview: ",
				desc: "www.forestholidays.co.uk",
				link: "https://www.forestholidays.co.uk",
			},
		],
	},

	{
		id: 3,
		employer: "All Front",
		img: DealstackProject,
		title: "Dealstack",
		details: [
			{
				icon: <FiFileText />,
				title: "Project: ",
				desc: "Investment Program",
			},
			{
				icon: <FiUser />,
				title: "Client: ",
				desc: "Ashley Banks",
			},
			{
				icon: <FaCode />,
				title: "Technologies: ",
				desc: "React, TypeScript",
			},
			{
				icon: <FiExternalLink />,
				title: "Preview: ",
				desc: "www.dealstack.io",
				link: "https://www.dealstack.io",
			},
		],
	},

	{
		id: 4,
		employer: "All Front",
		img: OzanProject,
		title: "Ozan",
		details: [
			{
				icon: <FiFileText />,
				title: "Project: ",
				desc: "Digital Banking",
			},
			{
				icon: <FiUser />,
				title: "Client: ",
				desc: "Ömer Suner",
			},
			{
				icon: <FaCode />,
				title: "Technologies: ",
				desc: "React, JavaScript",
			},
			{
				icon: <FiExternalLink />,
				title: "Preview: ",
				desc: "www.ozan.com",
				link: "https://www.ozan.com/en",
			},
		],
	},

	{
		id: 5,
		employer: "All Front",
		img: OpenPaydProject,
		title: "OpenPayd",
		details: [
			{
				title: "Project: ",
				desc: "Digital Banking",
			},
			{
				title: "Client: ",
				desc: "Iana Dimitrova",
			},
			{
				title: "Technologies: ",
				desc: "Angular, TypeScript",
			},
			{
				title: "Preview: ",
				desc: "www.openpayd.com",
				link: "https://www.openpayd.com",
			},
		],
	},

	{
		id: 6,
		employer: "All Front",
		img: WexselProject,
		title: "Wexsel",
		details: [
			{
				icon: <FiFileText />,
				title: "Project: ",
				desc: "Cryptocurrency Manager",
			},
			{
				icon: <FaCode />,
				title: "Technologies: ",
				desc: "Angular, TypeScript",
			},
		],
	},
];

export const themes = [
	{
		id: 1,
		img: Theme1,
		color: "hsl(252, 35%, 51%)",
	},

	{
		id: 2,
		img: Theme2,
		color: "hsl(4, 93%, 54%)",
	},

	{
		id: 3,
		img: Theme3,
		color: "hsl(271, 76%, 53%)",
	},

	{
		id: 4,
		img: Theme4,
		color: "hsl(225, 73%, 57%)",
	},

	{
		id: 5,
		img: Theme5,
		color: "hsl(43, 74%, 49%)",
	},

	{
		id: 6,
		img: Theme6,
		color: "hsl(339, 81%, 66%)",
	},

	{
		id: 7,
		img: Theme7,
		color: "hsl(80, 61%, 50%)",
	},

	{
		id: 8,
		img: Theme8,
		color: "hsl(19, 96%, 52%)",
	},

	{
		id: 9,
		img: Theme9,
		color: "hsl(88, 65%, 43%)",
	},

	{
		id: 10,
		img: Theme10,
		color: "hsl(42, 100%, 50%)",
	},
];
