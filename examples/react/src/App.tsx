import { Button } from "@adn-ui/react";
import { useTheme } from "@adn-ui/react-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export default function HelloWorld() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<Button onClick={toggleTheme} size="icon">
				{theme === "light" ? <MoonIcon /> : <SunIcon />}
			</Button>
		</div>
	);
}
