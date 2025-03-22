import { useReducer } from "react";
import { ToolbarContext } from ".";

const DEFAULT_VALUES = {
    language: "english",
    seed: 42,
    likes: 0,
    reviews: 0,
    view: "table",
};

const SET_VIEW = "SET_VIEW";
const SET_LANGUAGE = "SET_LANGUAGE";
const SET_SEED = "SET_SEED";
const SET_LIKES = "SET_LIKES";
const SET_REVIEWS = "SET_REVIEWS";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_VIEW:
            return { ...state, view: payload };
        case SET_LANGUAGE:
            return { ...state, language: payload };
        case SET_SEED:
            return { ...state, seed: payload };
        case SET_LIKES:
            return { ...state, likes: payload };
        case SET_REVIEWS:
            return { ...state, reviews: payload };
    }
};

export const ToolbarContextProvider = ({children}) => {
    const [toolbarParams, dispatch] = useReducer(reducer, DEFAULT_VALUES);

    const setView = (event) => {
        const id = event.currentTarget.id;
        dispatch({ type: SET_VIEW, payload: id });
    };

    const setLanguage = (event) => {
        const value = event.target.value;
        dispatch({ type: SET_LANGUAGE, payload: value });
    };

    const setSeed = (event) => {
        const value = event.target.value;
        dispatch({ type: SET_SEED, payload: value });
    };

    const setRandomSeed = () => {
        const random = `${Math.random()}`.slice(2);
        dispatch({ type: SET_SEED, payload: random });
    };

    const setLikes = (event) => {
        const value = event.target.value;
        dispatch({ type: SET_LIKES, payload: value });
    };

    const setReviews = (event) => {
        const value = event.target.value;
        dispatch({ type: SET_REVIEWS, payload: value });
    };

    return (
        <ToolbarContext.Provider
            value={{
                setView,
                toolbarParams,
                setLanguage,
                setSeed,
                setRandomSeed,
                setLikes,
                setReviews,
            }}
        >{children}</ToolbarContext.Provider>
    );
};
