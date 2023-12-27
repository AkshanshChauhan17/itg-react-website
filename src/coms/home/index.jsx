import Second from "./second";
import Welcome from "./welcoming";

export default function Home() {
    return (
        <div className="home">
            <Welcome />
            <Second />
        </div>
    )
}