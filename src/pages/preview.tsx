import React, { useEffect } from "react"
import { Link } from 'gatsby';
//components
import Lolly from "../components/lolly"

//styling
import "./styles.css"

const Preview = ({ location }) => {
  React.useEffect(() => {
    fetch("https://api.netlify.com/build_hooks/60254a4a06092a276e098b0e", {
      method: "post",
      body: JSON.stringify({}),
    }).then(function (response) {
      console.log("Build Triggered")
    })
  }, [])

  if (location.state !== undefined) {
    const { cl1, cl2, cl3, to, from, msg, link } = location.state.data

    return (
      <div className="App">
        <h2 style={{color: "purple", letterSpacing: "2px", fontFamily: "cursive", fontStyle: "italic"}}>Virtual Lolly</h2>
        <div style={{marginTop: "55px"}}>
          Share This Lolly With Your Friend:
        </div>
        <div style={{marginBottom: "75px"}}><Link to="https://virtual-lolly-12e-bootcamp.netlify.app/preview/${link}">
          {`https://virtual-lolly-12e-bootcamp.netlify.app/preview/${link}`}
          </Link></div>
        <div className="main-container">
          <div className="lolly-container">
            <Lolly top={cl1} middle={cl2} bottom={cl3} />
          </div>
          <div className="message-container">
            <p className="to">{`Dear ${to},`}</p>
            <p className="msg">{msg}</p>
            <p>From, </p>
            <p className="from">{from}</p>
          </div>
        </div>
      </div>
    )
  }
  return <div> PREVIEW </div>
 
}

export default Preview