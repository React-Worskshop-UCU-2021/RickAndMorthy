import "./Hero.scss"
import { ReactComponent as Logo } from "../../assets/icons/logo.svg"
import Search from "../Search/Search";
import { useState, useEffect } from 'react';
import Select from "../Select";

const statusOptions = [
  { value: "", label: "all"},
  { value: "alive", label: "alive"},
  {value: "death", label: "death"}
]

const gendeOptions = [
  { value: "", label: "all"},
  { value: "male", label: "male"},
  {value: "female", label: "female"}
]

const Hero = ({ characterName, setcharacterName, gender, setGender, status, setStatus }) => {

  return <div className="Hero">
    <h1 className="Hero__heading">
      <span>surf the</span>
      <Logo className="Hero__logo" />
      <span>universe</span>
    </h1>
    <Search setValue={setcharacterName} value={characterName} className="Hero__search"  />
    <div className="Hero__filters">
      <Select value={status} onSelect={setStatus} options={statusOptions} label="Status" />
      <Select value={gender} onSelect={setGender} options={gendeOptions} label="Gender" />
    </div>
  </div>
}

export default Hero;