import { Link } from "react-router-dom";
import "./SimpleCard.css";

type Props = {
    title: string;
    description: string;
    buttonTitle: string;
    cardBackgroundColor: string;
    linkBackgroundColor: string;
    redirectTo: string;
};

const SimpleCard = ({
    title,
    description,
    buttonTitle,
    cardBackgroundColor,
    linkBackgroundColor,
    redirectTo,
}: Props) => {
    return (
        <div className="card card__simple--align-items" style={{ backgroundColor: cardBackgroundColor }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link
                to={`${redirectTo}`}
                className={`link-button link-button--${linkBackgroundColor}`}
            >
                {buttonTitle}
            </Link>
        </div>
    );
};

export default SimpleCard;
