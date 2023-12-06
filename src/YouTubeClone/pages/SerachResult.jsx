import { useParams } from "react-router-dom";
import SearchResultVideoCard from "../componants/SearchResultVideoCard"; 
import Sidebar from "../layout/Sidebar/Sidebar";
import Loader from "../componants/Loader";
import { FetchDataFromAPI } from "../utils/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../store/Youtube-slice";
 
const SearchResult = ({ state }) => {
    const {searchQuery} = useParams();
    const dispatch = useDispatch(); 
    const { loading, searchResults } = useSelector(state => state); 
    useEffect(()=>{
        FetchDataFromAPI(`search/?q=${searchQuery}`).then((res)=>{
            dispatch(getSearchResults(res)); 
        }).catch(error=>{
            console.log(error);
        })
    },[searchQuery]) 
    return (
        <>
            <section className="flex ">
            {loading && <Loader />}
                <div className={`lg:block absolute lg:static transition-all z-20 bg-slate-950 w-[250px] 
                ${state ? ("absolute md:-left-[70%] -left-[80%] transition-all") : ("")}`}>
                    <Sidebar />
                </div>
                <div className="video mt-5 w-full flex flex-col gap-4">
                    {
                        searchResults[0]?.contents?.map((items)=>{
                            return <SearchResultVideoCard key={items?.video?.videoId} video={items?.video}/>  
                        })
                    }
                    
                </div>
            </section>
        </>
    )
}
export default SearchResult;