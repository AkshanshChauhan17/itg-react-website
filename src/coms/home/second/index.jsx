import AnnouncementBar from "../../global/announcementBar";
import m1 from "../../../assets/images/m1.jpg";
import m2 from "../../../assets/images/m2.jpg";
import m3 from "../../../assets/images/m3.jpg";
import m4 from "../../../assets/images/m4.jpg";
import m5 from "../../../assets/images/m5.jpg";
import SmallCard from "../../global/smallCards";
import BigLink from "../../global/bigLinks";
import { MdAdsClick, MdOutlineWorkspacePremium, MdOutlineMenuBook, MdOutlineContacts } from "react-icons/md";

export default function Second() {
    return (
        <div className="second">
            <AnnouncementBar title={"Announcement"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id, ullam perferendis vitae eos neque assumenda nulla excepturi dolorum itaque? Mollitia quod at sunt exercitationem, recusandae dolore consequatur molestiae nostrum?"} link_name={"read more"} />
            <div className="m-section">
                <SmallCard src={m1} name={"Lt. Gen. Gurmit Singh"} work_in={"Governor, Uttarakhand"}/>
                <SmallCard src={m2} name={"Shri Pushkar Singh Dhami"} work_in={"Chef Minister, Uttarakhand"}/>
                <SmallCard src={m3} name={"Shri Subodh Uniyal"} work_in={"Minister Technical Education, Uttarakhand"}/>
                <SmallCard src={m4} name={"Dr. Onkar Singh"} work_in={"Vice Chancellor, Uttarakhand"}/>
                <SmallCard src={m5} name={"Dr. Amit Agarwal"} work_in={"Director IT Gopeshwar"}/>
            </div>
            <hr style={{border: "1px solid gray"}} />
            <div className="link-section">
                <BigLink iconComponent={<MdAdsClick className="big-link-icon" />} linkName={"ADMISSION"} />
                <BigLink iconComponent={<MdOutlineWorkspacePremium className="big-link-icon" />} linkName={"PLACEMENT"} />
                <BigLink iconComponent={<MdOutlineMenuBook className="big-link-icon" />} linkName={"EXAM CELL"} />
                <BigLink iconComponent={<MdOutlineContacts className="big-link-icon" />} linkName={"CONTACT"} />
            </div>
            <hr style={{border: "1px solid gray"}} />
        </div>
    )
}