import "./Tag.scss";
import PropTypes from "prop-types";

const Tag = ({ name }) => {
  return <div className="Tag">{name}</div>;
};

Tag.propTypes = {
  name: PropTypes.string.isRequired
};

export default Tag;