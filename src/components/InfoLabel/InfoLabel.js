import "./InfoLabel.scss";
import PropTypes from "prop-types";

const InfoLabel = ({ text }) => {
  return <p className="Label">{text}</p>;
};

InfoLabel.propTypes = {
  text: PropTypes.string.isRequired
};

export default InfoLabel;