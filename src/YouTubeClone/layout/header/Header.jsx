import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
import youTubeLogo from "../../images/iconYoutube.png"; 
import user_avatar from "../../images/03.jpg"
import { bell, menu, mic, search } from "../../componants/Icons";  
const Header = ({ action }) => { 
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(searchQuery.length > 0){
           navigate(`/serachResult/${searchQuery}`)
        }
    }  
    
    return (
        <>
            <header className="header px-5 py-4 sticky top-0 z-50 bg-slate-950" > 
                <nav className="nav_bar w-full flex justify-between items-center">
                    <div className="start flex gap-4 align-middle items-center">
                        <div className="lg:hidden cursor-pointer" onClick={() => action()}><i className={`${menu}`} /></div>
                        <Link to='/' className="logo flex items-center gap-1">
                            <img src={youTubeLogo} alt="ytlogo"/><span className="hidden sm:inline-block">YouTube</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-5 items-center">
                        <div className=" hover:border-cyan-400 border border-slate-950  max-w-[400px] bg-slate-900 rounded-[50px]  ">
                            <form action="" onSubmit={(e) => handleSubmit(e)} className="flex items-center mr-2 w-[350px]" >
                                <input type="search" value={searchQuery} placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-slate-800 rounded-l-[50px] outline-none text-white py-2 px-4  w-full" />
                                <button  type="submit" className=" h-full pr-2 w-[50px]">
                                    <i className={`${search} search_icon`} />
                                </button>
                            </form>
                        </div>
                        <div className="w-[30px] h-[30px] cursor-pointer rounded-full text-center pt-1 bg-slate-700"><i className={`${mic}`} /></div>
                    </div>
                    <div className="nav_details flex gap-4 items-center">
                        <i className={`${bell} round_btn`} />
                        <div className="user_img w-[30px] cursor-pointer h-[30px] rounded-full overflow-hidden">
                            <img src={user_avatar} alt="user_avatar" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header