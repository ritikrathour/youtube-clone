import { useState } from "react"
import NewBadge from "./NewBadge";
import { useNavigate } from "react-router-dom";
import VideoLength from "./VideoLenght";

const VideoRecommandedCard = ({video})=>{ 
    const [musicNew] = useState("new");
    const navigate = useNavigate();
    return (
        <>
        <div className="flex flex-col gap-2 cursor-pointer md:flex-row "
         onClick={()=>navigate(`/video/${video?.videoId}`)}>
            <div className="w-full lg:max-w-[200px] h-[200px] lg:h-[120px] overflow-hidden rounded-xl relative ">
                <img className="object-cover" src={video?.thumbnails?.[0]?.url} alt="img" />
                {video?.lengthSeconds && (<p className="absolute bottom-1 right-1 text-white bg-black px-2  text-[12px] rounded">
                    <VideoLength length= {video?.lengthSeconds}/>
                    </p>)}
            </div>
            <div className="">
                <h2 className="text-sm text-white">{video?.title}</h2>
                <p className="text-slate-400 text-xs">{video?.author?.title} 
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" ? (<span className="w-[15px] h-[15px] inline-block rounded-full bg-slate-600 text-center">
                                            <i className="fas fa-check text-[10px]" /></span>) : ("")} </p>
                <p className="text-slate-400 text-xs">
                    <span className="viwes text-slate-500">{video?.stats?.viwes}</span> views .
                    <span className="time text-slate-500">{video?.publishedTimeText}</span></p>
                {
                    musicNew?(<NewBadge/>):("")
                }
            </div>
        </div>
        </>
    )
}
export default VideoRecommandedCard;