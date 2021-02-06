import "./DetailedUserHeader.scss";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const DetailedUserHeader = () => {
  return <div className="DetailedUserHeader">
    <Logo className="DetailedUserHeader__logo" />
  </div>;
};

export default DetailedUserHeader;