import React, { useEffect } from 'react'

export default function Api1() {
    const [data,setData] = useState([]);
    const [img,setimg] = useState();

    // axios
    // .get("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => {
    //         setData(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //     },[]);

    const dogImage = ()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response.data.message);
                setimg(response.data.message);
            })
            .catch((err)=> console.log(err));
    };

    useEffect(()=>{
        dogImage();
    },[]);

  return (
    <>
      <button onClick={dogImage}>Fetch dog image</button>
      <br />
      <br />
      <img src="{img}" alt="" />

      {/* <table border={2}>
                <thead>
                    <tr>
                        <th>sr no.</th>
                        <th>Title</th>
                        <th>images</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        const { id, title, body } = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>
                                    <img src="{url}" alt="{title}" />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}
    </>
  )
}
