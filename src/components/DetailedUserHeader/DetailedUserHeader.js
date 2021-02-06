import "./DetailedUserHeader.scss"
import {ReactComponent as Logo} from "../../assets/icons/logo.svg"
import Search from "../Search/Search";

const DetailedUserHeader = () => {
  return <div className="DetailedUserHeader">
    <Logo className="DetailedUserHeader__logo" />
    <div className="DetailedUserHeader__searchContainer">
      <Search className="DetailedUserHeader__search" />
    </div>
  </div>
}

export default DetailedUserHeader;