import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    test('debe de mostrarse correctamente', () => {
            
        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'Hola Mundo' } });

        expect( input.value ).toBe('Hola Mundo');
    });

    test('No debe de postear la información con submit si el input está vacio', () => {
        
        const inputValue    = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect( input.value ).toBe('');
        expect( onNewCategory ).not.toHaveBeenCalled();
    });

    test('debe de llamar el onNewCategory y limpiar la caja de texto', () => {
            
        const inputValue    = 'Hola Mundo';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'Hola Mundo' } });

        fireEvent.submit(screen.getByRole('form'));
        expect( input.value ).toBe(''); 
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

        expect( input.value ).toBe('');
    });
});