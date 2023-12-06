import React from "react";
import { useNavigate } from "react-router-dom";
import { check } from "../Icons";
import VideoLength from "../VideoLenght";
const VideoCard = ({ video }) => {
    const navigate = useNavigate();

    return (
        <> 
            <div className="max-w-[100%] cursor-pointer" onClick={() => navigate(`/video/${video?.videoId}`)}>
                <div className="max-w-[100%] max-h-[250px] overflow-hidden rounded-2xl relative">
                    <img className="block" src={video?.thumbnails[0]?.url} alt={video.name} />
                    <p className="time__span absolute bottom-2 right-2 text-white bg-black px-2 py-[px] text-[12px] rounded">
                        <VideoLength length = {video?.lengthSeconds}/> 
                    </p>
                </div>
                <div className="mt-2 px-1">
                    <div className="flex">
                        <div className="max-w-[30px] h-[30px] rounded-full overflow-hidden mr-2">
                            <img src={video?.author?.avatar[0]?.url} alt="logo" />
                        </div>
                        <div>
                            <h2 className="text-[16px] ">{video?.title}</h2>
                            <div className="mt-1">
                                <h4 className="text-[14px] text-slate-500">
                                    {video?.author?.title}
                                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" ? (
                                        <span className="w-[15px] ml-2 h-[15px] inline-block rounded-full bg-slate-600 text-center leading-[15px]">
                                            <i className={`fas ${check} text-[10px]`} />
                                        </span>) : ("")}
                                </h4>
                                <p className="text-slate-500 text-[12px]"><span
                                    className="viwes text-slate-500">{video?.stats?.views}</span> views .<span className="time text-slate-500">{video?.publishedTimeText}</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default VideoCard;