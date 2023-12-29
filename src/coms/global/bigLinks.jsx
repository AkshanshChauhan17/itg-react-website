export default function BigLink({iconComponent, linkName}) {
    return (
        <div className="big-link">
            {iconComponent}
            {linkName}
        </div>
    )
}