import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Rick and Morty');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length > 1 ) {
            // setCategories( categories => [inputValue, ...categories] );
            onNewCategory( inputValue );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
