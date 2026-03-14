import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Slider } from "./index";

function renderSlider(props: React.ComponentProps<typeof Slider.Root> = {}) {
  return render(
    <Slider.Root defaultValue={[50]} {...props}>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb />
    </Slider.Root>,
  );
}

describe("Slider", () => {
  test("renders with base class", () => {
    const { container } = renderSlider();
    const root = container.querySelector('[data-slot="slider"]');

    expect(root).not.toBeNull();
    expect(root?.classList.contains("slider")).toBe(true);
  });

  test("renders all data-slot attributes", () => {
    const { container } = renderSlider();

    expect(container.querySelector('[data-slot="slider"]')).not.toBeNull();
    expect(container.querySelector('[data-slot="slider-track"]')).not.toBeNull();
    expect(container.querySelector('[data-slot="slider-range"]')).not.toBeNull();
    expect(container.querySelector('[data-slot="slider-thumb"]')).not.toBeNull();
  });

  test("applies default md size classes", () => {
    const { container } = renderSlider();
    const root = container.querySelector('[data-slot="slider"]');
    const track = container.querySelector('[data-slot="slider-track"]');
    const thumb = container.querySelector('[data-slot="slider-thumb"]');

    expect(root?.classList.contains("slider--md")).toBe(true);
    expect(track?.classList.contains("slider__track--md")).toBe(true);
    expect(thumb?.classList.contains("slider__thumb--md")).toBe(true);
  });

  describe("sizes", () => {
    test("applies sm size", () => {
      const { container } = renderSlider({ size: "sm" });
      const root = container.querySelector('[data-slot="slider"]');
      const track = container.querySelector('[data-slot="slider-track"]');
      const thumb = container.querySelector('[data-slot="slider-thumb"]');

      expect(root?.classList.contains("slider--sm")).toBe(true);
      expect(track?.classList.contains("slider__track--sm")).toBe(true);
      expect(thumb?.classList.contains("slider__thumb--sm")).toBe(true);
    });

    test("applies lg size", () => {
      const { container } = renderSlider({ size: "lg" });
      const root = container.querySelector('[data-slot="slider"]');
      const track = container.querySelector('[data-slot="slider-track"]');
      const thumb = container.querySelector('[data-slot="slider-thumb"]');

      expect(root?.classList.contains("slider--lg")).toBe(true);
      expect(track?.classList.contains("slider__track--lg")).toBe(true);
      expect(thumb?.classList.contains("slider__thumb--lg")).toBe(true);
    });
  });

  test("renders slider role", () => {
    renderSlider();
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  test("has correct default value", () => {
    renderSlider({ defaultValue: [75] });
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "75");
  });

  test("respects min and max props", async () => {
    renderSlider({
      defaultValue: [5],
      max: 10,
      min: 0,
    });
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "10");
  });

  test("handles disabled state", () => {
    const { container } = renderSlider({ disabled: true });
    const root = container.querySelector('[data-slot="slider"]');

    expect(root?.hasAttribute("data-disabled")).toBe(true);
  });

  test("supports vertical orientation", () => {
    const { container } = renderSlider({ orientation: "vertical" });
    const root = container.querySelector('[data-slot="slider"]');

    expect(root?.getAttribute("data-orientation")).toBe("vertical");
  });

  test("renders multiple thumbs for range slider", () => {
    const { container } = render(
      <Slider.Root defaultValue={[25, 75]}>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb />
        <Slider.Thumb />
      </Slider.Root>,
    );

    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs.length).toBe(2);
  });

  test("forwards custom className to root", () => {
    const { container } = renderSlider({ className: "custom-slider" });
    const root = container.querySelector('[data-slot="slider"]');

    expect(root?.classList.contains("custom-slider")).toBe(true);
  });

  test("renders range element inside track", () => {
    const { container } = renderSlider();
    const track = container.querySelector('[data-slot="slider-track"]');
    const range = track?.querySelector('[data-slot="slider-range"]');

    expect(range).not.toBeNull();
    expect(range?.classList.contains("slider__range")).toBe(true);
  });
});
