import { useCallback, useEffect, useState } from "react";
import { ThemeContext } from "./context";

export type ThemeProviderProps = {
	children: React.ReactNode;
};

export type Theme = "light" | "dark";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setThemeState] = useState<Theme>("light");

	useEffect(() => {
		const storedTheme = localStorage.getItem("react-themes:theme");
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "light";

		if (storedTheme === "light" || storedTheme === "dark") {
			setThemeState(storedTheme);
		} else {
			setThemeState(systemTheme);
		}
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");
		root.classList.add(theme);
		root.setAttribute("data-theme", theme);
	}, [theme]);

	const setTheme = useCallback((newTheme: Theme) => {
		localStorage.setItem("react-themes:theme", newTheme);
		setThemeState(newTheme);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
