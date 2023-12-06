import { useEffect, useMemo, useState } from "react"
import Button from "../componants/Button";
import Tag from "../componants/tags/Tag";
import VideoRecommandedCard from "../componants/VideoRecommandedCard";
import { useParams } from "react-router-dom";
import { angleDown, bell, check, downloade, share, thumbsDown, thumbsUp } from "../componants/Icons";
import ReactPlayer from 'react-player'
import Loader from "../componants/Loader";
import { FetchDataFromAPI } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedVideo, getVideoDetails } from "../store/Youtube-slice"
const VideoDetails = () => {
    const { videoDetails, loading, relatedVideo } = useSelector(state => state);
    const dispatch = useDispatch()
    const { id } = useParams();   
    // const { isLoading, getRelatedVideo, dispatch } = useFetchApi();
    // const [video, setVideo] = useState();
    // useEffect(() => {
    //     fetchVideoDetails();
    //     fetchRelatedVideos();
    // }, [ID.id])
    // const fetchVideoDetails = () => {
    //     fetchdataFromAPI(`video/details/?id=${ID.id}}`).then((response) => {
    //         setVideo(response);
    //         console.log(response);
    //     })
    // }
    // const fetchRelatedVideos = () => {
    //     dispatch({ type: "SET_LOADING" });
    //     fetchdataFromAPI(`video/related-contents/?id=${ID.id}`).then((response) => {
    //         dispatch({ type: "GET_RELATED_VIDEO", payload: response?.contents });
    //     })
    // } 

    useEffect(() => {  
        FetchDataFromAPI(`video/details/?id=${id}`).then((res) => {
            dispatch(getVideoDetails(res));
        });
        FetchDataFromAPI(`video/related-contents/?id=${id}`).then((res) => { 
            dispatch(getRelatedVideo(res));
        });
    }, [id])
    return (
        <>
            {loading? <Loader /> : (
                <section className=" gap-4 lg:flex xl:px-10 relative">
                    <div className="max-w-[950px]">
                            <div className="video m-auto max-w-[750px] max-h-[550px] lg:sticky lg:top-14 overflow-hidden  rounded">
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} />
                            </div>
                        <div className="py-4 lg:sticky lg:top-[400px]">
                            <h2 className="text-[16px] ">{videoDetails[0]?.title}</h2>
                            <div className="mt-4">
                                <div>
                                    <div className="left flex  gap-2 items-start">
                                        <div className="creator__logo w-[30px] h-[30px] rounded-full overflow-hidden">
                                            <img src={videoDetails[0]?.author?.avatar[0].url} alt="author avatar" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-[14px]">{videoDetails[0]?.author?.title}
                                                {videoDetails[0]?.author?.badges[0]?.type === "VERIFIED_CHANNEL" ?
                                                    (<span className="w-[15px] h-[15px] inline-block rounded-full bg-slate-600 text-center leading-[15px]">
                                                        <i className={`"fas ${check} text-[10px]" `} /></span>) : ("")}
                                            </h4>
                                            <p className="text-[12px] text-slate-400">{videoDetails[0]?.author?.stats?.subscribersText}</p>
                                        </div>
                                    </div>
                                    <Button className="mt-1 py-2" text="Subscribed" icon={[bell, angleDown]} />
                                </div>
                                <div className="flex item-center gap-1 mt-2">
                                    <Button text={videoDetails[0]?.stats?.likes + "K"} icon={[thumbsUp, thumbsDown]} />
                                    <Button className="hidden md:inline-block" text="Share" icon={[share]} />
                                    <Button text="Download" icon={[downloade]} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[500px] md:max-w-[600px] lg:max-w-[400px] xl:max-w-[500px]">
                        <div className="tags min-w-[200px] overflow-auto">
                            <Tag />
                        </div>
                        <div className="mt-4 flex flex-col gap-4">
                            {relatedVideo[0]?.contents?.map((item) => {
                                if (item?.type !== "video") return false;
                                return (
                                    <VideoRecommandedCard video={item?.video} key={item?.video?.videoId} />
                                )
                            })};
                        </div>

                    </div>
                </section>
            )}

        </>
    )
}
export default VideoDetails