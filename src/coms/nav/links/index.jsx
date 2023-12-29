import { useEffect, useState } from "react"
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

export default function NavLinks({sv}) {
    const [navBarFocus, setNavBarFocus] = useState(true);
    const [navLink, setNavLink] = useState("");
    const [navClosed, setNavClosed] = useState(false);

    useEffect(()=>{
        const st_one = setTimeout(() => {
            setNavBarFocus(false);
        }, 5000);
        console.log('clsd')
        return ()=>{
            clearTimeout(st_one)
        }
    }, [navBarFocus])

    return (
        <div className="nav-links" style={navBarFocus ? {} : {opacity: 0.1, padding: "10px 80px"}} onMouseMove={()=>setNavBarFocus(true)}>
            {
                navClosed ? <IoIosArrowDropdown className="close" onClick={()=>setNavClosed(false)}/> : <IoIosArrowDropup className="close" onClick={()=>setNavClosed(true)}/>
            }
            <div className="upper" style={navClosed ? {display: "none"} : null}>
                <p className={navLink==="HOME" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>{setNavLink(e.target.innerText); setNavBarFocus(false); setNavClosed(true)}}>HOME</p>
                <p className={navLink==="ABOUT US" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>{setNavLink(e.target.innerText); setNavBarFocus(false); setNavClosed(true)}}>ABOUT US</p>
                <p className={navLink==="ADMINISTRATION" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>{setNavLink(e.target.innerText); setNavBarFocus(false); setNavClosed(true)}}>ADMINISTRATION</p>
                <p className={navLink==="ACADEMIC" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>{setNavLink(e.target.innerText); setNavBarFocus(false); setNavClosed(true)}}>ACADEMIC</p>
                <p className={navLink==="DEPARTMENT" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>{setNavLink(e.target.innerText); setNavBarFocus(false); setNavClosed(true)}}>DEPARTMENT</p>
                <p className={navLink==="STUDENTS" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>{setNavLink(e.target.innerText); setNavBarFocus(false); setNavClosed(true)}}>STUDENTS</p>
                <p className={navLink==="FACULTIES" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>{setNavLink(e.target.innerText); setNavBarFocus(false); setNavClosed(true)}}>FACULTIES</p>
            </div>
            {   
                navClosed ? 
                null :
                <>
                    <hr />
                    <p className="lower fs-small">/{navLink}</p>
                </>
            }
        </div>
    )
}