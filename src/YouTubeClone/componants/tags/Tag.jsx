import React, { useEffect, useState } from "react";
import { Catagories } from "../../utils/Contstants";  
// import { FetchDataFromAPI } from "../../utils/api";
// import { useDispatch } from "react-redux";
// import { getSelectedData} from "../../store/Youtube-slice";
const Tag = () => {
    const [active, setActive] = useState("All");  
    const TabClickHnadler = (item) => { 
        setActive(item?.name);   
    }  
//   const dispatch = useDispatch()
//     useEffect(()=>{ 
//         FetchDataFromAPI(`search/?q=${active}`).then((res)=>{
//             console.log(res?.contents);
//             dispatch(getSelectedData(res?.contents))
//         })
//     },[active])
    return (
        <>
            <ul className="flex gap-2 items-center">
                {
                    Catagories.map((elm, index) => {
                        return (
                            <li onClick={() => TabClickHnadler(elm)} 
                            className={` px-2 py-2 cursor-pointer text-[14px] rounded-[5px]
                                ${active === elm.name ? "bg-white text-slate-950" : "text-white bg-slate-700/50"} }`}
                                key={index}>{elm.type === "All" ? ("All") : (elm.name)}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default Tag;