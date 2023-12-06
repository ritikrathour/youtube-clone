import React from "react";
import { Link } from "react-router-dom";
import { sidebar_data, sidebar_explore_data } from "../../utils/Contstants"; 
const Sidebar = () => { 
    return (

        <>
            <ul className="flex flex-col gap-2">
                {
                    sidebar_data?.map((elm, index) => {
                        return (
                            <li className="my-1 hover:bg-slate-700 transition-all px-2 py-1 rounded cursor-pointer" key={index}>
                                <Link className="text-[14px]" to="">
                                    <i className={`${elm.icon} mr-2 text-slate-500`} />{elm.link_name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr className="my-4" />
            <ul className="flex flex-col gap-2">
                <h2 className="text-[16px] px-2">Explore</h2>
                {
                    sidebar_explore_data?.map((elm, index) => {
                        return (
                            <li className="my-1 hover:bg-slate-700  transition-all py-1 px-2 rounded cursor-pointer" key={index}>
                                <Link className="text-[14px]" to="">
                                    <i className={`${elm.icon} mr-2 text-slate-500`} />{elm.link_name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default Sidebar;