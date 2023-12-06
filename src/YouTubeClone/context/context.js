import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchdataFromAPI } from "../utils/api";
import { Reducer } from "../reducers/Reducer";
export const Context = createContext();
export const AppContenxt = ({ children }) => {
    let initialState = {
        isLoading: true,
        searchResults: [],
        selectCatagory: "New", 
        getRelatedVideo:[],
        videoDetails:[],
    } 
    const [state, dispatch] = useReducer(Reducer, initialState);  
   const fetchSelectedCategoryData = (query) => {
        dispatch({ type: "SET_LOADING" });
        try {
            fetchdataFromAPI(`search/?q=${query}`).then((response) => {
                dispatch({ type: "SEARCH__RESULT", payload: response.contents });   
            })
        } catch (error) {
            dispatch({type:"IS_ERROR"})
        }
    }  
    useEffect(() => {
        fetchSelectedCategoryData(state.selectCatagory)
    }, [state.selectCatagory]);

    return <Context.Provider value={{...state,dispatch}}>
        {children}
    </Context.Provider>
}
export const useFetchApi = ()=>{
   return useContext(Context)
}
export default Context;