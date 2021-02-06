import "./Header.scss"
import {ReactComponent as Logo} from "../../assets/icons/logo.svg"
import Search from "../Search/Search";

const Header = () => {
    return <div>
    <h1 className="LogoHeader">
            <span>Surf the</span>
            <Logo className="LogoHeader__logo"/>
            <span>Universe</span>
        </h1>
    <Search />
    </div>
}

export default Header;