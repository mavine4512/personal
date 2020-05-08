import React, { useEffect, useState } from "react";
import "./index.css";

const Footer = () => {
  // const [posts, setPost] = useState([]);

  // useEffect(() => {
  //     getPosts();
  // });

  // const getPosts = async () => {
  //     const rawData = await fetch('https://jsonplaceholder.typicode.com/posts').catch(error => {
  //         console.log(data);
  //     });

  //     const data = await rawData.json();
  // }

  return (
    <div className="footer-container">
      <p className="copyright">&copy; 2020 All rights reserved</p>
    </div>
  );
};

export default Footer;
