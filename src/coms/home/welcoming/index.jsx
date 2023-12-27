import collage_img from "../../../assets/images/college_image.jpg";

export default function Welcome() {
    return (
        <div className="welcome">
            <div className="left fs-mid bx">
                <span className="fs-large bxx">Welcome</span> To The Institute Of Technology Gopeshwar, Where Innovation And Excellence Converge! Our Campus In The Picturesque Setting Of Gopeshwar Is Dedicated To Shaping Future Leaders In Technology And Engineering. Committed To Holistic Development, We Blend Cutting-Edge Education With Hands-On Experience. Join Us On A Journey Of Discovery And Transformation, Where Curiosity, Creativity, And Community Thrive. Welcome To A Hub Of Innovation At The Institute Of Technology Gopeshwar!
            </div>
            <img src={collage_img} className="right" />
        </div>
    )
}