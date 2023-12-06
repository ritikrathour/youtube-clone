const Comment = () => {
    return (
        <>
            <div className="flex gap-5 mt-2">
                <div className="max-w-[30px] h-[30px] rounded-full overflow-hidden">
                    <img src="../images/03.jpg" alt="logo" />
                </div>
                <div className="">
                    <h6 className="text-white text-[12px]">ritik rathour <span>2 years ago</span></h6>
                    <p className="text-[14px]">When the song is more popuar than the movie Arijit is just mesmerising</p>
                    <div className="flex mt-2 items-center gap-1">
                        <i className="fas fa-thumbs-up text-[12px] text-slate-400" />
                        <span className="text-slate-400 text-[10px]">442</span>
                        <i className="fas fa-thumbs-down text-[12px] text-slate-400" />
                        <span className="text-white text-[12px] ml-1 cursor-pointer">Reply</span>
                    </div>
                </div>
            </div>
            <button className="text-blue-400 mt-2 text-[12px]"><i className="fas fa-caret-down text-blue-400" /> 1 reply</button>
        </>
    )
}
export default Comment;