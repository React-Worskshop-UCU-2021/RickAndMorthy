import "./UserDetail.scss";
import Tag from "../../components/Tag";
import InfoView from "../../components/InfoView/InfoView";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCharacter } from "../../api";

function UserDetail({ selectCharacter }) {
  const { id } = useParams();
  const [character, setCharacter] = useState("");

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const items = await getCharacter(id)

    if (items.error) {
      console.log("Error ", items.error)
    } else {
      setCharacter(items);
    }
  }

  const { name, status, image } = character || {};

  return character ? (<div className="DetailedUser">
    <p className="DetailedUser__navText">
      <NavLink className="DetailedUser__link" activeClassName="DetailedUser__activeLink" exact to="/">
        Home
      </NavLink>
      <span className="DetailedUser__itemNamee">
                    &nbsp;&nbsp;
        <NavLink className="DetailedUser__link" activeClassName="DetailedUser__activeLink" exact to="/">
                        #{id} {name}
                    </NavLink>
                </span>
    </p>
    <div className="DetailedUser__container">
      <div className="DetailedUser__image">
        <img src={image} />
      </div>
      <div className="DetailedUser__description">
        <h1 className="DetailedUser__description_title">#{id} {name}</h1>
        <div className="DetailedUser__description_tags">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
        <div className="DetailedUser__description__content">
          <div className="DetailedUser__description__content_userInfo">
            <InfoView />
            <InfoView />
            <InfoView />
            <InfoView />
            <InfoView />
          </div>
          <div className="DetailedUser__description__content_episodes">

          </div>
        </div>
      </div>
    </div>
  </div>) : (
    <div className="DetailedUser">
      Error
    </div>
  );
}

export default UserDetail;