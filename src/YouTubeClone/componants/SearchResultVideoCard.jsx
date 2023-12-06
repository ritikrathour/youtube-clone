import { useNavigate, useParams } from "react-router-dom";
import { check } from "./Icons";
import VideoLength from "./VideoLenght";
const SearchResultVideoCard = ({ video }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex gap-4 hover:bg-slate-800 transition-all lg:flex-row flex-col cursor-pointer p-2 rounded-md"
                onClick={() => navigate(`/video/${video?.videoId}`)}>
                <div className="img rounded-lg border overflow-hidden lg:h-[150px] lg:w-[300px] w-full h-[270px] relative">
                    <img className="block h-full" src={video?.thumbnails?.[1]?.url || "../images/no-Poster.jpg"} alt="img" />
                    {
                        video?.lengthSeconds && (
                            <p className="time__span absolute bottom-2 right-2 text-white bg-black px-2 py-[px] text-[12px] rounded">
                                <VideoLength length={video?.lengthSeconds}/>
                            </p>
                        )
                    }
                </div>
                <div className="content">
                    <h2 className="title text-[16px] md:text-lg font-medium">{video?.title}</h2>
                    <p className="text text-xs text-slate-400">{video?.descriptionSnippet}</p>

                    <div className="flex items-center gap-1">
                        <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-2">
                            <img src={video?.author?.avatar[0]?.url} alt="logo" />
                        </div>
                        <div>
                            <div className="mt-1">
                                <h4 className="text-[12px] text-slate-300 capitalize">{video?.author?.title}
                                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" ? (
                                        <span className="w-[15px] h-[15px] ml-2 inline-block rounded-full bg-slate-600 text-center leading-[15px]">
                                            <i className={`${check} text-[10px]`} />
                                        </span>) : ("")}
                                </h4>
                                <p className="text-slate-300 text-[12px] font-medium"><span className="viwes text-slate-300">{video?.stats?.views}</span> views . <span className="time text-slate-300">{video?.publishedTimeText}</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SearchResultVideoCard;