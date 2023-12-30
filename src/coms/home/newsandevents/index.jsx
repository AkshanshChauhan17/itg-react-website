import NewsAndEventCard from "../../global/newsandeventsCard";

export default function NewsAndEvent() {
    return (
        <div className="news-and-events">
            <div className="heading fs-large bxx">NEWS & EVENTS</div>
            <div className="news-events-section">
                <NewsAndEventCard />
                <NewsAndEventCard />
                <NewsAndEventCard />
                <NewsAndEventCard />
                <NewsAndEventCard />
                <NewsAndEventCard />
                <NewsAndEventCard />
            </div>
        </div>
    )
}