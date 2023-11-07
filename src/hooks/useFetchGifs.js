import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState( [] );

    const [ isLoading, setLoading ] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setLoading( false );
    }

    useEffect( () => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }

}
