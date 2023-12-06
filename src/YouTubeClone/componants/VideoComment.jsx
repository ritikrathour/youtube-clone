import Comment from "./Comment";

const VideoComment = () => {
    return (
        <>
            <div className="flex gap-5 items-center">
                <p className="text-[14px]">16,104 Comments</p>
                <p className="text-[14px] cursor-default"><i className="fas fa-align-right" /> Sort by</p>
            </div>
            <div className="mt-4 flex gap-4">
                <div className="max-w-[30px] h-[30px] rounded-full overflow-hidden">
                    <img src="../images/03.jpg" alt="logo" />
                </div>
                <div className="flex flex-col w-full">
                    <input type="text" className="w-full text-white text-[12px]" placeholder="Add a comment..." />
                    <hr />
                </div>
            </div>

            <div className="mt-4">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>

        </>
    )
}
export default VideoComment;