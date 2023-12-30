import { useState } from "react"

export default function SmallCard({src, name, work_in}) {
    const [isLoad, setIsLoad] = useState(true);
    return (
        <div className="small-card">
            <img src={src} className="upper" loading="lazy" onLoad={()=>setIsLoad(false)} style={isLoad ? {filter: "blur(10px)"} : {}}/>
            <div className="lower">
                <p className="fs-mid bx">{name}</p>
                <p className="fs-small">{work_in}</p>
            </div>
        </div>
    )
}