import { useState } from "react"

export default function NavLinks() {
    const [navLink, setNavLink] = useState("");
    return (
        <div className="nav-links">
            <div className="upper">
                <p className="fs-mid bx" onClick={(e)=>setNavLink(e.target.innerText)}>HOME</p>
                <p className="fs-mid bx" onClick={(e)=>setNavLink(e.target.innerText)}>ABOUT US</p>
                <p className="fs-mid bx" onClick={(e)=>setNavLink(e.target.innerText)}>ADMINISTRATION</p>
                <p className="fs-mid bx" onClick={(e)=>setNavLink(e.target.innerText)}>ACADEMIC</p>
                <p className="fs-mid bx" onClick={(e)=>setNavLink(e.target.innerText)}>DEPARTMENT</p>
                <p className="fs-mid bx" onClick={(e)=>setNavLink(e.target.innerText)}>STUDENTS</p>
                <p className="fs-mid bx" onClick={(e)=>setNavLink(e.target.innerText)}>FACULTIES</p>
            </div>
            <hr />
            <p className="lower fs-small">/{navLink}</p>
        </div>
    )
}