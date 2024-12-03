import { useState } from 'react'
import './App.css'
import FireStore from './FireStore'
import Auth from './Auth'
// import RealtimeDB from './RealtimeDB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RealtimeDB/>
      {/* <FireStore/> */}
      {/* <Auth/> */}


    </>
  )
}

export default App