import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/iliyan-markov/",
	server: {
		open: true,
		hmr: {
			protocol: "ws",
			host: "localhost",
		},
	},
});