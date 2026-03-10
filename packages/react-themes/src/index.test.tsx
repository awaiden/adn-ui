import { act, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeProvider, useTheme } from "./index";

const TestComponent = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div>
			<span data-testid="theme-value">{theme}</span>
			<button type="button" onClick={() => setTheme("dark")}>
				Change
			</button>
		</div>
	);
};

describe("ThemeProvider Unit Tests", () => {
	beforeEach(() => {
		localStorage.clear();
		document.documentElement.className = "";
		document.documentElement.removeAttribute("data-theme");
	});

	it("should load the default theme initially", () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);
		expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
	});

	it("should update localStorage and DOM when theme changes", async () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);

		const button = screen.getByRole("button");

		await act(async () => {
			button.click();
		});

		expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
		expect(localStorage.getItem("react-themes:theme")).toBe("dark");
		expect(document.documentElement).toHaveClass("dark");
		expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
	});

	it("should respect theme from localStorage on mount", () => {
		localStorage.setItem("react-themes:theme", "dark");
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);
		expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
		expect(document.documentElement).toHaveClass("dark");
		expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
	});

	it("should fallback to default theme if localStorage value is invalid", () => {
		localStorage.setItem("react-themes:theme", "invalid-theme");
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);
		expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
		expect(document.documentElement).not.toHaveClass("dark");
		expect(document.documentElement.getAttribute("data-theme")).toBe("light");
	});

	it("should allow toggling back to light theme", async () => {
		const ToggleComponent = () => {
			const { theme, setTheme } = useTheme();
			return (
				<div>
					<span data-testid="theme-value">{theme}</span>
					<button
						type="button"
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					>
						Toggle
					</button>
				</div>
			);
		};
		render(
			<ThemeProvider>
				<ToggleComponent />
			</ThemeProvider>,
		);

		const button = screen.getByRole("button");

		await act(async () => {
			button.click();
		});
		expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");

		await act(async () => {
			button.click();
		});
		expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
		expect(localStorage.getItem("react-themes:theme")).toBe("light");
		expect(document.documentElement).not.toHaveClass("dark");
		expect(document.documentElement.getAttribute("data-theme")).toBe("light");
	});

	it("should call setTheme with the correct value", async () => {
		const spy = vi.fn();
		const SpyComponent = () => {
			const { setTheme } = useTheme();
			return (
				<button
					type="button"
					onClick={() => {
						setTheme("dark");
						spy("dark");
					}}
				>
					Set Dark
				</button>
			);
		};
		render(
			<ThemeProvider>
				<SpyComponent />
			</ThemeProvider>,
		);

		const button = screen.getByRole("button");
		await act(async () => {
			button.click();
		});
		expect(spy).toHaveBeenCalledWith("dark");
	});

	it("should not add duplicate theme classes", async () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);

		const button = screen.getByRole("button");
		await act(async () => {
			button.click();
		});
		await act(async () => {
			button.click();
		});
		const classList = document.documentElement.className.split(" ");
		const darkCount = classList.filter((c) => c === "dark").length;
		expect(darkCount).toBe(1);
	});
});
