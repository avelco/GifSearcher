import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading correctamente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( category ) );

    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
            
            const gifs = [
                {
                    id: 'ABC',
                    url: 'https://localhost/cualquier/cosa.jpg',
                    title: 'Cualquier cosa'
                },
                {
                    id: '123',
                    url: 'https://localhost/cualquier/cosa.jpg',
                    title: 'Cualquier cosa'
                }
            ];
    
            useFetchGifs.mockReturnValue({
                images: gifs,
                isLoading: false
            });
    
            render(<GifGrid category={ category }/>);
    
            expect( screen.getAllByRole( 'img' ).length ).toBe(2);
    
        });
});