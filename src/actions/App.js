import axios from 'axios';

export const SET_CHARACTERS_DATA = 'SET_CHARACTERS_DATA';
export const SET_LOADING = "SET_LOADING";
export const SET_SEARCH_KEY = "SET_SEARCH";

export const setCharactersData = (data) => ({
    type: SET_CHARACTERS_DATA,
    payload: data
});

export const setLoading = (value) => ({
    type: SET_LOADING,
    payload: value,
})

export const setSearchKey = (key) => ({
    type: SET_SEARCH_KEY,
    payload: key,
})

export const loadCharacters = async (dispatch, key) => {
    try {
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${key}`)
        dispatch(setCharactersData(result.data));
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
}