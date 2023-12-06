import React from "react";
import "./style.css";
const VideoCardSkeleton = () => {
    return (
        <>
            <div className="w-full">
                <div className="img__box max-w-[100%] h-[220px] overflow-hidden rounded-2xl relative">
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <div className="circle w-[30px] h-[30px] rounded-full overflow-hidden ">
                    </div>
                    <div className="">
                        <div className="line1 w-[250px] h-[15px] rounded">
                        </div>
                        <div className="line2 w-[100px] h-[15px] mt-2 rounded">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default VideoCardSkeleton;