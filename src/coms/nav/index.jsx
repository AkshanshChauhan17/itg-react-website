import MidNav from "./mid";
import UpperNav from "./upper";

export default function Nav() {
    return (
        <div className="nav">
            <UpperNav />
            <MidNav />
        </div>
    )
}