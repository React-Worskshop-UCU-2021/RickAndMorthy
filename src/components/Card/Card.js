import "./Card.scss"
import Tag from "../Tag";
import { Link } from "react-router-dom";
import Photo from "../../assets/images/lucy.png"
import InfoView from "../InfoView/InfoView";
import PropTypes from "prop-types";

const Card = ({ id, name, image, status, gender, location, origin }) => {
  return (
    <div className="Card">
      <div className="Card__imageHolder"> </div>
        <Link className="Card__link" to={`character/${id}`}>
          <img className="Card__image" src={image} />
        </Link>
      <div className="Card__content">
        <Link className="Card__link" to={`character/${id}`}>
          <h4 className="Card__name">{name}</h4>
        </Link>
        <div className="Card__tags">
          <Tag className="Card__tag" />
          <Tag className="Card__tag" />
        </div>
        <div className="DetailedCharacter__mainInfo">
          <InfoView />
          <InfoView />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Alive', 'Dead', 'unknown']).isRequired,
  gender: PropTypes.oneOf(['Male', 'Female', 'unknown', 'Genderless'])
    .isRequired,
  location: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  origin: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;