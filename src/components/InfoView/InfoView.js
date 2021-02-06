import "./InfoView.scss";
import InfoLabel from "../InfoLabel";
import InfoValue from "../InfoValue/InfoValue";
import PropTypes from "prop-types";

const InfoView = ({ label, value }) => {
  return <div className="InfoView">
    <InfoLabel text={label} />
    <InfoValue text={value} />
  </div>;
};

InfoView.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default InfoView;