import { extendTheme } from "@chakra-ui/react";
import { Styles } from "@chakra-ui/theme-tools";

export const colors = {
	primary: "#BF1818",
	secondary: "#F39322",
};

const STYLES: Styles = {
	global: {
		"*": {
			boxSizing: "border-box",
		},

		html: {
			minH: "100%",
			overflowX: "hidden",
		},

		body: {
			display: "flex",
			flexDir: "column",
			overflowX: "hidden",
			color: "black",

			"#root": {
				"* .roboto": {
					fontFamily: "'Inter', sans-serif",
				},
			},
		},

		"#root": {
			minH: "100vh",
			display: "flex",
			flexDirection: "column",
			width: "100%",
			pos: "relative",

			"*": {
				fontFamily: "'Inter'",
			},
		},
	},
};

export const customTheme = extendTheme({
	styles: STYLES,
	colors: colors,
});
