
import { useEffect } from 'react';
import { useState } from 'react';

const useRecipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
            })
    }, [])

    return recipes;
};

export default useRecipes;