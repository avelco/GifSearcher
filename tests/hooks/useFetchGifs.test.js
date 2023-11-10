import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en el hook useFetchGifs', () => {

    test('debe retornar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { images, isLoading } = result.current;

        expect( images ).toEqual( [] );
        expect( isLoading ).toBe( true );

    });

    test('debe retornar un arreglo de imagenes y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitFor(() => {
            expect( result.current.images.length).toBeGreaterThan(0)
        });
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 10 );
        expect( isLoading ).toBe( false );

    });

});