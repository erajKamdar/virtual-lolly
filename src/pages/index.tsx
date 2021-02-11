import React from "react"
import { Link } from "gatsby"

import Lolly from "../components/lolly"

import './styles.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="indexHeading">Virtual Lolly</h1>
      <h3 className="subTitle">Because We All Know Someone Who Deserve Some Sugar</h3>
     
     <div className="allLollies">
     <div className="lollyContainer">
      <div className="lollies" >
        <Lolly top="lightblue" bottom="rgb(144, 240, 176)" middle="plum" />
      </div>
      <div className="lollies">
        <Lolly top="lightblue" bottom="rgb(144, 240, 176)" middle="plum" />
      </div>
      <div className="lollies">
        <Lolly top="lightblue" bottom="rgb(144, 240, 176)" middle="plum" />
      </div>
</div>

    
      <div className="lollyContainer">
      <div className="lollies">
        <Lolly top="lightgreen" bottom="thistle" middle="pink" />
      </div>
      <div className="lollies">
        <Lolly top="lightgreen" bottom="thistle" middle="pink" />
      </div>
      <div className="lollies">
        <Lolly top="lightgreen" bottom="thistle" middle="pink" />
      </div>
      
      </div>
      <div className="lollyContainer">
      <div className="lollies">
        <Lolly top="papayawhip" bottom="rgb(250, 131, 250)" middle="rgb(200, 247, 130)" />
      </div>
      <div className="lollies">
        <Lolly top="papayawhip" bottom="rgb(250, 131, 250)" middle="rgb(200, 247, 130)" />
      </div>
      <div className="lollies">
        <Lolly top="papayawhip" bottom="rgb(250, 131, 250)" middle="rgb(200, 247, 130)" />
      </div>
      
      </div>
     </div>
      <Link
        to="/create_lolly"
      >
        <button className="indexBtn">Make Your Own Lolly</button> 
      </Link>
    </div>
  )
}