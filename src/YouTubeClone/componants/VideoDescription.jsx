import { Link } from "react-router-dom";

const VideoDescriptions = ()=>{
    return(
        <>
        <div className="bg-slate-800 p-2 rounded-xl">
            <h4 className="text-[14px] font-semibold">81M views 4 years ago</h4>
            <p className="text-[14px]">👉 SUBSCRIBE to Zee Music Comapany - <Link to="" className="text-blue-500">https://bit.ly/2yPcBkS</Link></p>
            <br/>
            <br/>
            <div className="flex">
            <p className="font-bold text-[14px]">To stream & download song</p>
            <button className="bg-slate-700 text-white ml-1 p-1 text-[12px]">Show more</button>
            </div>
        </div>
        </>
    )
}
export default VideoDescriptions;