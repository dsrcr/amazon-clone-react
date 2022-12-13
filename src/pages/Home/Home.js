import React from "react";
import "./Home.css";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <div className="home">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg"
      />
      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisnesses Paperback. "
          price={23.33}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />{" "}
        <Product
          id="2"
          title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included."
          price={23.33}
          rating={5}
          image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg"
        />
        <Product
          id="3"
          title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisnesses Paperback "
          price={281.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61O7HHu181L._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4"
          title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisnesses Paperback "
          price={23.33}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="5"
          title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisnesses Paperback "
          price={23.33}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisnesses Paperback "
          price={23.33}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
