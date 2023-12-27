import utu_logo from "../../../assets/images/utu_logo.jpg"
import itg_logo from "../../../assets/images/itg_logo.jpg"

export default function MidNav() {
    return (
        <div className="mid-nav">
            <img src={utu_logo} className="logo" />
            <img src={itg_logo} className="logo" />
            <div className="info">
                <p className="txt-pc fs-small">VEER MADHO SINGH BHANDARI UTTARAKHAND TECHNICAL UNIVERSITY CAMPUS INSTITUTE</p>
                <p className="txt-sc fs-mid">INSTITUTE OF TECHNOLOGY GOPESHWAR</p>
                <p className="txt-pc fs-small">Approved By AICTE, NEW DELHI</p>
            </div>
        </div>
    )
}