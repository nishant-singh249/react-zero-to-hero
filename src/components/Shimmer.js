const Shimmer = () => {
    return (
        <div className="restaurent-list">
            {Array(15).fill("").map((e, index) => <div key={index} className="shimmer-card"></div>)}
        </div>
    )
}

export default Shimmer;