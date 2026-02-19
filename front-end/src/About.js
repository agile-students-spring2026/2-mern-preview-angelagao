import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5002/about") 
      .then(res => setAbout(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!about) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{about.name}</h1>
      <p>{about.bio}</p>
      <img src={about.image} width="200" alt="profile" />
    </div>
  );
}

export default About;
