

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.travel.image} alt=""/>
            <div className="card-content">
                <div className="card-location">
                    <img className="logo-location" src="./images/location-logo.png" alt=""/>
                    <p className="card-country">{props.travel.country}</p>
                    <p className="card-google"><a href={props.travel.link}>View on Google Maps</a></p>
                </div>
                <h3 className="card-title">{props.travel.location}</h3>
                <p className="card-date">{props.travel.date}</p>
                <p className="card-description">{props.travel.description}</p>
            </div>
        </div>
    )
}

export default Card;