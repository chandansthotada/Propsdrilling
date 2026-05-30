import React from 'react'
import {Data} from './Context/data'
import GrandParent from "./pages/GrandParent"
const App = () => {
  let name="PRAMATH"
  return (
    <>
      <Data.Provider value={name}>
        <GrandParent/>
      </Data.Provider>
    </>
  )
}

export default App