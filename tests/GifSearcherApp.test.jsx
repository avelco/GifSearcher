import { render, screen } from "@testing-library/react";
import { GifSearcherApp } from "../src/GifSearcherApp";

describe('GifSearcherApp', () => {

    test('should render GifSearcherApp component and be equal to the snapshot', () => {

        const wrapper = render( <GifSearcherApp /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('should render a title', () => {

        render( <GifSearcherApp /> );
        expect( screen.getByText('GifSearcherApp') ).toBeTruthy();
    });

    test()
});