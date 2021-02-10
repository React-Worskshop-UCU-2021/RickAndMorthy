import "./InfoValue.scss";
import PropTypes from "prop-types";

// TODO: imports

// TODO: I see that implementation of InfoValue is the same as InfoLabel
// think about making one reusable component
const InfoValue = ({ text }) => {
  return <p className="InfoValue">{text}</p>;
};

InfoValue.propTypes = {
  text: PropTypes.string.isRequired
};

export default InfoValue;