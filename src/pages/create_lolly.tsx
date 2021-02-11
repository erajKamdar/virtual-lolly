import React from "react"
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { Redirect } from "@reach/router"
import { navigate } from "gatsby"

//components
import Lolly from "../components/lolly"

//styling
import "./styles.css"

const ADD_LOLLY = gql`
  mutation(
    $cl1: String!
    $cl2: String!
    $cl3: String!
    $to: String!
    $msg: String!
    $from: String!
  ) {
    addLolly(cl1: $cl1, cl2: $cl2, cl3: $cl3, to: $to, msg: $msg, from: $from) {
      cl1
      cl2
      cl3
      to
      from
      msg
      link
    }
  }
`

export default function createLolly() {
  const [addLolly, { loading }] = useMutation(ADD_LOLLY)

  const [cl1, setCl1] = React.useState<string>("#ae7d8f")
  const [cl2, setCl2] = React.useState<string>("#3aef4e")
  const [cl3, setCl3] = React.useState<string>("#a79c5d")
  const [update, setUpdate] = React.useState(undefined)

  const toField = React.useRef(null)
  const msgField = React.useRef(null)
  const fromField = React.useRef(null)

  const handleSubmit = () => {
    const toRef = toField.current
    const msgRef = msgField.current
    const fromRef = fromField.current

    addLolly({
      variables: {
        cl1,
        cl2,
        cl3,
        to: toRef.value,
        from: fromRef.value,
        msg: msgRef.value,
      },
      update: (proxy, mutationResult) => {
        console.log(mutationResult)
        setUpdate(mutationResult)
        navigate(`/preview/${mutationResult.data.addLolly.link}`, {
          state: {
            data: mutationResult.data.addLolly,
          },
        })
      },
    })
  }

  if (loading) {
    return <div>loading</div>
  }

  return (
    <div className="App">
      <h2>Create Lolly</h2>
      <div className="main-container">
        <div className="lolly-container">
          <div>
            <Lolly top={cl1} middle={cl2} bottom={cl3} />
          </div>
          <div>
            <input
              type="color"
              value={cl1}
              onChange={e => setCl1(e.target.value)}
            />
            <input
              type="color"
              value={cl2}
              onChange={e => setCl2(e.target.value)}
            />
            <input
              type="color"
              value={cl3}
              onChange={e => setCl3(e.target.value)}
            />
          </div>
        </div>
        <div className="form-container">
          <input type="text" placeholder="Enter recipient" ref={toField} />
          <textarea placeholder="Enter your message" ref={msgField} />
          <input type="text" placeholder="Enter sender name" ref={fromField} />
          <button
            style={{
              background: "#d72d3b",
              fontWeight: "bold",
              color: "white",
              padding: "5px 10px",
              textDecoration: "none",
              borderRadius: "5px",
              border: "none",
            }}
            onClick={handleSubmit}
          >
            Send Lolly
          </button>
        </div>
      </div>
    </div>
  )
}