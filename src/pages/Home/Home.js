import "./Home.scss";
import _ from "lodash";
import UserList from "../../components/UserList";
import Hero from "../../components/Hero";
import { useCallback, useState } from "react";

function Home() {
  const [queryName, setQueryName] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const delayedQuery = useCallback(_.debounce(setQueryName, 500), [setQueryName]);

  // TODO: remove
  console.log("-->", queryName);

  const onNameChange = (value) => {
    setName(value);
    delayedQuery(value);
  };

  return <div className="Home">
    <Hero
      characterName={name}
      setCharacterName={onNameChange}
      gender={gender}
      setGender={setGender}
      status={status}
      setStatus={setStatus}
    />
    <UserList status={status} gender={gender} name={queryName} />
  </div>;
}

export default Home;
