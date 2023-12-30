export default function NewsAndEventCard() {
    return (
        <div className="news-and-events-card">
            <div className="top">
                <div className="left fs-small bx">
                    EVENT
                </div>
                <div className="right">
                    <div className="top fs-small bx">DATE: 17-03-2024</div>
                    <div className="bottom fs-small txt-pc bx">@admin</div>
                </div>
            </div>
            <div className="mid">
                <hr /> 
                <div className="head fs-mid bx">
                    CHESS EVENT IN COLLEGE
                </div>
                <hr />
                <div className="content">On the occasion of ABC Itgopeshwar organizing the chess event on campus where any student openly compete with each other and winner get the following prize
1. 5 Books of xyz
2. Pen Set
3. Aws Account</div>
            </div>
            <div className="bottom">
                <div className="link txt-sc fs-small">read more</div>
            </div>
        </div>
    )
}