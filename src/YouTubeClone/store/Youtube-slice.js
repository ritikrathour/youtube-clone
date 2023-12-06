import { createSlice } from "@reduxjs/toolkit";

export const YouTube_Slice = createSlice({
    name:"YouTube_Slice",
    initialState:{
        loading:true,
        homeData:[],
        videoDetails:[],
        relatedVideo:[],
        searchResults:[]
    },
    reducers:{
        getHomeData: (state,action)=>{
            state.loading = true;
            state.homeData.push(...action.payload)
            state.loading = false;
        },  
        getVideoDetails:(state,action)=>{
            state.loading = true; 
            state.videoDetails.push(action.payload)
            state.loading = false;
        },
        getRelatedVideo:(state,action)=>{
            state.loading = true;
            state.relatedVideo.push(action.payload)
            state.loading = false;
        },
        getSearchResults:(state,action)=>{
            state.loading = true;
            state.searchResults.pop(action.payload)
            state.searchResults.push(action.payload);
            state.loading = false;
        }
    }
})
export const {getHomeData,getSelectedData,getVideoDetails,getRelatedVideo,getSearchResults} = YouTube_Slice.actions;
export default YouTube_Slice.reducer;