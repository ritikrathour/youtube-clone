export const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "SEARCH__RESULT":
            return {
                ...state,
                isLoading: false,
                searchResults: action.payload,
            }
        case "VIDEO_DETAILS":
            return {
                ...state,
                isLoading: false,
                videoDetails: action.payload,
            }
        case "SELECTED_CATAGORY":
            return {
                isLoading: false,
                selectCatagory: action.payload,
            }
        case "GET_RELATED_VIDEO":
            return {
                ...state,
                isLoading: false,
                getRelatedVideo: action.payload,
            }
        case "IS_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "VIDEO_SEARCH":
            return {
                ...state,
                isLoading: false,
                videoSearch: action.payload,
            }
    }
} 