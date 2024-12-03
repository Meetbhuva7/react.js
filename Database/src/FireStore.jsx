import React, { useEffect, useState } from 'react';
import { app } from './firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';

function FireStore() {
    const fireStore = getFirestore(app);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();
        await addDoc(collection(fireStore, "First"), {
            name: name,
            email: email,
        });
        e.target.reset();
        fetchData();
    };

    const fetchData = async () => {
        const snapshot = await getDocs(collection(fireStore, "First"));
        const userdata = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setData(userdata);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteData = async (id) => {
        await deleteDoc(doc(fireStore, "First", id));
        setData(data.filter((user) => user.id !== id));
    };

    const updatedata = async (id) => {
        const newName = prompt("Enter Name");
        const newEmail = prompt("Enter Email");
        if (newName && newEmail) {
            await updateDoc(doc(fireStore, "First", id), {
                name: newName,
                email: newEmail,
            });

            const updateUser = data.map((user) => {
                if (user.id === id) {
                    return { id, name: newName, email: newEmail };
                } else {
                    return user;
                }
            });
            setData(updateUser);
        }
    };

    return (
        <>
            <h1>Fire Store</h1>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <button>Submit</button><br />
            </form>

            {data.map((user) => (
                <>
                <li key={user.id}>
                    {user.name} {user.email}
                </li>
                    <button onClick={() => deleteData(user.id)}>Delete</button>
                    <button onClick={() => updatedata(user.id)}>Update</button><br />
                </>
            ))};
        </>
    );
}

export default FireStore;