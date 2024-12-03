import { useState } from 'react'
import './App.css'
import Auth from './Auth'
import SignIn from './SignIn'
import { app } from './firebase'
import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth'


function App() {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);

  useEffect(
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.email);
            setUser(user);
        } else {
            setUser(null)
        }
    }), []
);
if (user === null) {
  return(
  <>
   <Auth/> <br />
   <SignIn/>
   </>
   )
 
}
 
  return (
    <>
    {/* <Realtimedb/> */}
    {/* <FirestoreDB/> */}
    {/* <FormFireStore/> */}
    <button onClick={()=>{signOut(auth)}}>sinOut</button>
    <h1> Welcome...{user.email}</h1>
      
    </>
  )
}
export default App