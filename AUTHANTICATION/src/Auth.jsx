import React, { useState } from 'react';
import { app } from './firebase'; 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Auth() {

    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", { email, password }); 
        

        createUserWithEmailAndPassword(auth, email, password)
            .then((val) => {
                console.log("User created successfully", val);
            })
            .catch((error) => {
                console.error("Error creating user", error);
            });
    };

    return (

        <>
            <h1>Sign Up</h1>
            <form action="" onSubmit={submit}>
                <input
                    type="email"
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <input
                    type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />
                <button type="submit">Sign up</button>
            </form>
        </>
    );
}

export default Auth