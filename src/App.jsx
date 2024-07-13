import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Themes />
				<Home />
				<About />
				<Portfolio />
				<Contact />
			</BrowserRouter>
		</div>
	);
}

export default App;
