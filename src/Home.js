import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img className="home__image" src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg"></img>
            <h1>Default page</h1>
        </div>
    )
}

export default Home