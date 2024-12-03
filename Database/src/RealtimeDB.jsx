import React, { useState } from 'react';
import { app } from './firebase'; 
import { getDatabase, ref, set } from 'firebase/database';

function RealtimeDB() {

    const db = getDatabase(app);

    const saveData = (id, name, age) => {
        set(ref(db, "Abc/id"), {
            name: name,
            age: age,
        });
    };

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        set(ref(db, "Student/Age"), {
            name: name,
            age: age,
        });
        e.target.reset();
    };

  return (
    <>
        <h1>Real Time DataBase</h1>

            <button onClick={() => saveData("user4", "test", 18)}>Save Data</button>

            <form onSubmit={formSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter Name' 
                    onChange={(e) => setName(e.target.value)} /><br /><br />


                <input 
                    type="number" 
                    placeholder='Enter Age' 
                    onChange={(e) => setAge(e.target.value)} /><br /><br />

                <button>Submit</button>
            </form>
    </>
  )
}

export default RealtimeDB