import {defineConfig, loadEnv, build} from "vite";
import react from "@vitejs/plugin-react";

export default ({mode}) => {
	process.env = {...process.env, ...loadEnv(mode, process.cwd())};
	build.minify = false;
	return defineConfig({
		plugins: [react()],
		// server: {
		// 	port: process.env.VITE_PORT,
		// },
	});
}
