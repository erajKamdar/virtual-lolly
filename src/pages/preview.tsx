import React, { useEffect } from "react"

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
        <h2>Virtual Lolly</h2>
        <div>
          Your lolly has been created. You can share it by sending this url:
        </div>
        <div
          style={{ border: "1px solid #000", padding: "5px", margin: "1em" }}
        >{`https://gifted-yonath-d1c814.netlify.app/lolly/${link}`}</div>
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

  return <div>Preview</div>
}

export default Preview