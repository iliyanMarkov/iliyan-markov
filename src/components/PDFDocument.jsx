import React, { useState, useEffect } from "react";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Image,
} from "@react-pdf/renderer";
import { getStorageColor, getStorageTheme } from "./Themes";
import Profile from "../assets/Profile-Smiling-Black.jpg";

const getBodyColor = (theme) => {
	return theme === "dark-theme" ? "hsl(0, 0%, 7%)" : "hsl(0, 0%, 100%)";
};

const getBodyTextColor = (theme) => {
	return theme === "light-theme" ? "hsl(0, 0%, 7%)" : "hsl(0, 0%, 100%)";
};

const styles = ({ pageTextColor, theme }) =>
	StyleSheet.create({
		page: {
			backgroundColor: "white",
		},
		content: {
			display: "flex",
			flexDirection: "row",
			height: "100%",
			width: "100%",
		},
		leftPanel: {
			backgroundColor: getBodyColor(theme),
			width: 200,
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: "50px 5px",
			borderRight: `5px solid ${pageTextColor}`,
		},
		circularImage: {
			width: 100,
			height: 100,
			borderRadius: "50%",
			objectFit: "cover",
			marginBottom: 20,
			border: "1px solid hsl(0, 0%, 7%)",
		},
		name: {
			fontSize: 20,
			fontWeight: 900,
			color: pageTextColor,
			marginBottom: "5px",
		},
		fontTitleSimple: {
			color: getBodyTextColor(theme),
			lineHeight: 10,
			fontWeight: "bold",
			fontSize: 9,
			letterSpacing: 0.05,
		},
		contTitleLeft: {
			backgroundColor: getBodyColor(theme),
			paddingBottom: 20,
		},
		hrLeft: {
			border: 0,
			height: 1,
			backgroundColor: pageTextColor,
		},
		contContentLeft: {
			paddingTop: 10,
			paddingBottom: 0,
			backgroundColor: getBodyColor(theme),
			width: 120,
		},
		fontTitleLeft: {
			color: pageTextColor,
			fontWeight: "bold",
			fontSize: 12,
			letterSpacing: 0.05,
		},
		fontSubtitleLeft: {
			color: getBodyTextColor(theme),
			fontWeight: "bold",
			fontSize: 10,
			letterSpacing: 0.05,
			marginBottom: 5,
		},
		listItem: {
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 2,
			color: getBodyTextColor(theme),
		},
		bulletPoint: {
			width: 3,
			height: 3,
			borderRadius: "50%",
			backgroundColor: "#777a7b",
			marginRight: 5,
			marginLeft: 5,
		},
		listItemText: {
			color: "#777a7b",
			fontSize: 9,
		},
		font: {
			color: "#777a7b",
			fontSize: 9,
		},
		rightListWrapper: {
			backgroundColor: "transparent",
			width: "100%",
			display: "flex",
			flexDirection: "column",
			padding: "50px 10px",
			gap: "30px",
		},
		rightPanel: {
			backgroundColor: "transparent",
			width: "100%",
			display: "flex",
			flexDirection: "column",
		},
		fontTitleRight: {
			color: pageTextColor,
			fontWeight: "900",
			fontSize: 20,
			letterSpacing: 0.05,
		},
		hrRight: {
			border: 0,
			height: 1,
			backgroundColor: pageTextColor,
			marginTop: 0,
			marginBottom: 5,
		},

		fontSubtitleRight: {
			color: getBodyColor(theme),
			fontWeight: "bold",
			fontSize: 10,
			letterSpacing: 0.05,
		},

		rightListItem: {
			flexDirection: "row",
			alignItems: "center",
			marginTop: 5,
			color: getBodyTextColor(theme),
			paddingRight: 30,
		},
		rightBulletPoint: {
			width: 3,
			height: 3,
			borderRadius: "50%",
			backgroundColor: "#777a7b",
			marginRight: 5,
			marginLeft: 5,
		},
		rightListItemText: {
			color: "#777a7b",
			fontSize: 9,
		},
	});

const PDFDocument = () => {
	const [theme, setTheme] = useState(getStorageTheme());
	const [pageTextColor, setPageTextColor] = useState(getStorageColor());

	useEffect(() => {
		const handleStorageChange = () => {
			setTheme(getStorageTheme());
			setPageTextColor(getStorageColor());
		};

		window.onstorage = handleStorageChange;

		return () => {
			window.onstorage = null;
		};
	}, []);

	return (
		<Document>
			<Page
				size="A4"
				style={
					styles({
						pageTextColor,
						theme,
					}).page
				}
			>
				<View
					style={
						styles({
							pageTextColor,
							theme,
						}).content
					}
				>
					<View
						style={
							styles({
								pageTextColor,
								theme,
							}).leftPanel
						}
					>
						<Image
							style={
								styles({
									pageTextColor,
									theme,
								}).circularImage
							}
							src={Profile}
						/>
						<Text
							style={
								styles({
									pageTextColor,
									theme,
								}).name
							}
						>
							Iliyan Markov
						</Text>
						<Text
							style={
								styles({
									pageTextColor,
									theme,
								}).fontTitleSimple
							}
						>
							WEB DEVELOPER
						</Text>
						<View
							style={
								styles({
									pageTextColor,
									theme,
								}).contTitleLeft
							}
						>
							<Text
								style={
									styles({
										pageTextColor,
										theme,
									}).fontTitleLeft
								}
							>
								EDUCATION
							</Text>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).hrLeft
								}
							></View>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contContentLeft
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleLeft
									}
								>
									National School of arts
								</Text>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).font
									}
								>
									"Dobri Hristov" (2012-2017)
								</Text>
							</View>
						</View>
						<View
							style={
								styles({
									pageTextColor,
									theme,
								}).contTitleLeft
							}
						>
							<Text
								style={
									styles({
										pageTextColor,
										theme,
									}).fontTitleLeft
								}
							>
								SKILLS
							</Text>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).hrLeft
								}
							></View>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contContentLeft
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleLeft
									}
								>
									Professional
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										HTML5
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										TypeScript
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Sass
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										React
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Angular
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Redux
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Node
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Wordpress
									</Text>
								</View>
							</View>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contContentLeft
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleLeft
									}
								>
									Personal
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Team Player
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Adaptable
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Fast Learner
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Determined
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).listItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).bulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).listItemText
										}
									>
										Honest
									</Text>
								</View>
							</View>
						</View>
						<View
							style={
								styles({
									pageTextColor,
									theme,
								}).contTitleLeft
							}
						>
							<Text
								style={
									styles({
										pageTextColor,
										theme,
									}).fontTitleLeft
								}
							>
								CONTACT
							</Text>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).hrLeft
								}
							></View>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contContentLeft
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleLeft
									}
								>
									Phone
								</Text>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).font
									}
								>
									+359 89 6913944
								</Text>
							</View>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contContentLeft
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleLeft
									}
								>
									Email
								</Text>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).font
									}
								>
									ilkomarkov000@gmail.com
								</Text>
							</View>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contContentLeft
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleLeft
									}
								>
									Website
								</Text>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).font
									}
								>
									https://iliyanmarkov.github.io/iliyan-markov/
								</Text>
							</View>
						</View>
					</View>
					<View
						style={
							styles({
								pageTextColor,
								theme,
							}).rightListWrapper
						}
					>
						<View
							style={
								styles({
									pageTextColor,
									theme,
								}).rightPanel
							}
						>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contTitleRight
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontTitleRight
									}
								>
									Law Business Research
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).hrRight
									}
								></View>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleRight
									}
								>
									2023 - Present "Front-End Developer"
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Developing and maintaining web
										applications using React.js and other
										related technologies.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Collaborating with cross-functional
										teams including designers, product
										managers, and other developers to create
										high-quality products.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Developing and maintaining multiple
										projects and company businesses.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Collaborating closely with UX/UI
										designers and back-end developers,
										translating design concepts and
										requirements into fully realized
										features.
									</Text>
								</View>
							</View>
						</View>
						<View
							style={
								styles({
									pageTextColor,
									theme,
								}).rightPanel
							}
						>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contTitleRight
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontTitleRight
									}
								>
									All Front
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).hrRight
									}
								></View>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleRight
									}
								>
									2022 - 2023 "Front-End Developer"
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Developing and maintaining web
										applications using React.js, Angular,
										GraphQL and other related technologies.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Collaborating with cross-functional
										teams including designers, product
										managers, clients, other companies and
										other developers to create high-quality
										products.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Helping multiple startup companies to
										efficiently begin their websites, apps
										and businesses.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Participating in code reviews and
										providing constructive feedback to other
										developers.
									</Text>
								</View>
							</View>
						</View>
						<View
							style={
								styles({
									pageTextColor,
									theme,
								}).rightPanel
							}
						>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contTitleRight
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontTitleRight
									}
								>
									Medlink Students
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).hrRight
									}
								></View>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleRight
									}
								>
									2021 - 2022 "Web Developer"
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Developing and maintaining web
										applications using mainly React.js,
										WordPress, PHP and other related
										technologies.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Collaborating with cross-functional
										teams including designers, product
										managers, marketing and other developers
										to maintain and continue to improve the
										company application.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Leading a team of developers to help
										create a platform in which students can
										become doctors.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Constantly improving the conversion rate
										of the company.
									</Text>
								</View>
							</View>
						</View>
						<View
							style={
								styles({
									pageTextColor,
									theme,
								}).rightPanel
							}
						>
							<View
								style={
									styles({
										pageTextColor,
										theme,
									}).contTitleRight
								}
							>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontTitleRight
									}
								>
									Sugarhigh Studio
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).hrRight
									}
								></View>
								<Text
									style={
										styles({
											pageTextColor,
											theme,
										}).fontSubtitleRight
									}
								>
									2019 - 2021 "React.js Developer"
								</Text>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Developing and maintaining web
										applications using React.js.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Collaborating with the designers, and
										the clients to create user-friendly
										websites.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Implementing responsive design and
										ensuring cross-browser compatibility.
									</Text>
								</View>
								<View
									style={
										styles({
											pageTextColor,
											theme,
										}).rightListItem
									}
								>
									<View
										style={
											styles({
												pageTextColor,
												theme,
											}).rightBulletPoint
										}
									/>
									<Text
										style={
											styles({
												pageTextColor,
												theme,
											}).rightListItemText
										}
									>
										Actively contributing to the planning
										and strategy phases of projects. This
										involves advocating for best practices
										in web development, accessibility, and
										SEO to ensure that our projects not only
										look great but also rank well and are
										accessible to all users.
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</Page>
		</Document>
	);
};

export default PDFDocument;
