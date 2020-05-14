import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [Movies, setMovies] = useState([
        { title: "Citizen Kane", director: "Orson Welles", year: "1941", id: 1 },
        { title: "The Waterboy", director: "Frank Coraci", year: "1998", id: 2 },
        { title: "Remains of the Day", director: "Frank Coraci", year: "1989", id: 3 },

    ]);

    const addMovie = (title, director, year) => {
        setMovies([...Movies, { title, director, year, id: uuid() }]);
    };
    const removeMovie = (id) => {
        setMovies(Movies.filter(Movie => Movie.id !== id));
    }

    return (
        <MovieContext.Provider value={{ Movies, addMovie, removeMovie }}>
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider;