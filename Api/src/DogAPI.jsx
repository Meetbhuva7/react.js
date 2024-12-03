import React, { useState } from 'react';
import axios from 'axios';

function DogAPI() {
  const [img, setImg] = useState("");

  const fetchDogImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data.message);
        setImg(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {img && <img src={img} alt="A Random Dog" />}<br></br>
      <button onClick={fetchDogImage}>Dog API</button>
    </>
  );
}

export default DogAPI;