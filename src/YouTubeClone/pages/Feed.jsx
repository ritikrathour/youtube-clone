import Tag from "../componants/tags/Tag";
import VideoCard from "../componants/videosCard/VideoCard";
import Sidebar from "../layout/Sidebar/Sidebar"
import VideoCardSkeleton from "../componants/skeletons/VideoCardSkeleton";

import { useEffect } from "react";
import { FetchDataFromAPI } from "../utils/api";
import { getHomeData } from "../store/Youtube-slice";
import { useDispatch, useSelector } from "react-redux";

const Feed = ({ state }) => {
  const { homeData, loading } = useSelector(state => state); 
  const dispatch = useDispatch();
  useEffect(() => {
     FetchDataFromAPI("search/?q=new").then((res) => {
      dispatch(getHomeData(res?.contents))
    }); 
  }, [])
  return (
    <>
      <section className="w-full lg:flex items-start gap-4">
        <div className={`lg:block fixed top-[55px] lg:sticky transition-all z-20 bg-slate-950 w-[250px] ${state ? ("absolute -left-[80%]  transition-all") : ("")}`}>
          <Sidebar />
        </div>
        <div className="mt-4 w-full">
          <div className="tags max-w-[800px] xl:max-w-[1090px] mx-auto overflow-auto">
            <Tag />
          </div>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {
              !loading ? (
                homeData?.map((item) => {
                  if (item?.type !== "video") return false;
                  return (
                    <VideoCard
                      key={item?.video?.videoId}
                      video={item?.video}
                    />
                  )
                }))
                : (<>
                  <VideoCardSkeleton />
                  <VideoCardSkeleton />
                  <VideoCardSkeleton />
                  <VideoCardSkeleton />
                  <VideoCardSkeleton />
                  <VideoCardSkeleton />
                </>)
            }
          </div>
        </div>
      </section>
    </>
  )
}
export default Feed;
