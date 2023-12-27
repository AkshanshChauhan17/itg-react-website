import { useState } from "react"

export default function NavLinks() {
    const [navLink, setNavLink] = useState("");
    return (
        <div className="nav-links">
            <div className="upper">
                <p className={navLink==="HOME" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>setNavLink(e.target.innerText)}>HOME</p>
                <p className={navLink==="ABOUT US" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>setNavLink(e.target.innerText)}>ABOUT US</p>
                <p className={navLink==="ADMINISTRATION" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>setNavLink(e.target.innerText)}>ADMINISTRATION</p>
                <p className={navLink==="ACADEMIC" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>setNavLink(e.target.innerText)}>ACADEMIC</p>
                <p className={navLink==="DEPARTMENT" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>setNavLink(e.target.innerText)}>DEPARTMENT</p>
                <p className={navLink==="STUDENTS" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>setNavLink(e.target.innerText)}>STUDENTS</p>
                <p className={navLink==="FACULTIES" ? "fs-mid bx active" : "fs-mid bx unactive"} onClick={(e)=>setNavLink(e.target.innerText)}>FACULTIES</p>
            </div>
            <hr />
            <p className="lower fs-small">/{navLink}</p>
        </div>
    )
}