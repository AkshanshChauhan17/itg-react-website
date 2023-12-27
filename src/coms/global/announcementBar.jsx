import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function AnnouncementBar({title, content, link_name}) {
    return (
        <div className="announcement-bar">
            <div className="left fs-small">
                {title}<HiOutlineSpeakerphone />
            </div>
            <marquee className="mid fs-small">
                {content}
            </marquee>
            <div className="right fs-small">
                {link_name}
            </div>
        </div>
    )
}