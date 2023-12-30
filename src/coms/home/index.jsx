import NewsAndEvent from "./newsandevents";
import Second from "./second";
import Tequip from "./tquip3";
import Welcome from "./welcoming";

export default function Home() {
    return (
        <div className="home">
            <Welcome />
            <Second />
            <Tequip />
            <NewsAndEvent />
        </div>
    )
}