export default function SmallCard({src, name, work_in}) {
    return (
        <div className="small-card">
            <img src={src} className="upper" />
            <div className="lower">
                <p className="fs-mid bx">{name}</p>
                <p className="fs-small">{work_in}</p>
            </div>
        </div>
    )
}