import { useState } from "react"
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

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
        <form aria-label="form" onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
                placeholder="Amazing GIFs"
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}


