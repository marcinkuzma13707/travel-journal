import { PositionIcon } from "./Icons";

export default function  Card(props){
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card--image"/>
            <div className="card__info">
                <span className="card__info--location">
                    <span className="card__info--icon">
                        <PositionIcon />
                    </span>
                    <span className="card__info--text">
                        {props.item.location}
                    </span>
                </span>
                <a href={props.item.googleMapsUrl}>
                    View on Google maps
                </a>
            </div>
        </div>
    )
}