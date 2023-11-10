import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Item", () => {
    const title = "Title";
    const url = "https://localhost/image.png";

    test("should render correctly", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

	test("Should show the images and the ALT text", () => {
		render(<GifItem title={title} url={url} />);

		// const img = document.querySelector("img");
		// expect(img.src).toBe(url);

		// const altText = img.alt;
		// expect(altText).toBe(title);

		const { alt, src } = document.querySelector("img");
		expect(alt).toBe(title);
		expect(src).toBe(url);
	});

	test("Should have the title in the paragraph", () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
