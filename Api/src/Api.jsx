import { useEffect } from "react";
import { useState } from "react";

function Api(){
    const [data,setData] = useState([]);
    const [err,setErr] = useState();

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                setErr(error.message);
            });


    },[]);
    return (
        <>
            {err ? <p>{err}</p> : null}
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        const { id, title, body } = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Api
