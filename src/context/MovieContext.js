import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [Movies, setMovies] = useState([
        { title: "Citizen Kane", director: "Orson Welles", year: "1941", id: 1 },
        { title: "The Waterboy", director: "Frank Coraci", year: "1998", id: 2 },
        { title: "Remains of the Day", director: "Frank Coraci", year: "1989", id: 3 },

    ]);
    const questions = [
        {
            id: 1,
            question: 'Which statement about Hooks is not true?',
            answer_a:
                'Hooks are 100% backwards-compatible and can be used side by side with classes',
            answer_b: 'Hooks are still in beta and not available yet',
            answer_c:
                "Hooks are completely opt-in, there's no need to rewrite existing code",
            answer_d: 'All of the above',
            correct_answer: 'b',
        },
        {
            id: 2,
            question: 'Which one is not a Hook?',
            answer_a: 'useState()',
            answer_b: 'useConst()',
            answer_c: 'useReducer()',
            answer_d: 'All of the above',
            correct_answer: 'b',
        },
        {
            id: 3,
            question: 'What Hook should be used for data fetching?',
            answer_a: 'useDataFetching()',
            answer_b: 'useApi()',
            answer_c: 'useEffect()',
            answer_d: 'useRequest()',
            correct_answer: 'c',
        },
        {
            id: 4,
            question: "What does bind do in JavaScript?",
            answer_a: "Bind is a method for connecting two strings",
            answer_b: "Bind is similar to the call method but accepts an array of arguments instead of comma separated values.",
            answer_c: "The bind method sets the this inside the function and immediately executes that function.",
            answer_d: "The bind method creates a new function and sets the this keyword to the specified object.",
            correct_answer: 'd',
        },
        {
            id: 5,
            question: "When running a JavaScript function, what is the difference between scope and context?",
            answer_a: "Scope is the object that `this` refers to. Context is the environment that the function is written in.",
            answer_b: "Scope refers to the availability of variables while running. The object within which the function runs is the context. ",
            answer_c: "Scope refers to the receiver of a function. Context refers to the variables that are available in that scope.",
            answer_d: "Scope refers to the ability of a function to modify elements outside of its definition. The context is the JavaScript engine that runs the code.",
            correct_answer: "b",
        },
    ];

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