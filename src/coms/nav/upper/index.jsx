import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function UpperNav() {
    return (
        <div className="upper-nav">
            <div className="link-section fs-small">
                <IoMdMail color="white"/>
                <p>itgopeshwar@gmail.com</p>
            </div>
            <div className="link-section fs-small">
                <FaLocationDot color="white"/>
                <p>Institute of Technology, Gopeshwar, Chamoli Uttarakhand-246424</p>
            </div>
            <div className="link-section fs-small">
                <IoMdCall color="white"/>
                <p>AICTE Feedback</p>
            </div>
            <div className="link-section fs-small">
                <p>24*7 Women Helpline Number - 9389658483</p>
            </div>
        </div>
    )
}