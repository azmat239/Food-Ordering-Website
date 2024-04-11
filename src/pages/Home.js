import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ListCards from "../components/ListCards";
import classNames from "classnames";

const Home = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/datafetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();

      setItems(response[0]);
      setCategory(response[1]);
    } catch (error) {
      console.log("Error Occured : ", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const imageClasses = classNames(
    "h-[70vh] sm:h-[95vh] w-screen shadow-2xl shadow-black rounded-b-xl obect-fill"
  );
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% relative">
      <div className="relative top-0 z-0">
        <div className="absolute z-10 bottom-24 left-[10%] sm:left-[35%]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Your Search Query"
            className=" focus:outline-none py-1 px-4 font-medium text-lg sm:w-96 rounded-xl "
          />
        </div>
        <Carousel
          showStatus={false}
          autoPlay
          interval="2000"
          transitionTime="1000"
          showThumbs={false}
          infiniteLoop
          showArrows={false}
          className="rounded-lg shadow-2xl shadow-slate-300"
        >
          <div>
            <img
              src="https://source.unsplash.com/random/1920x1080/?burger"
              alt="not found"
              className={imageClasses}
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/1920x1080/?sandwich"
              alt="not found"
              className={imageClasses}
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/1920x1080/?pizza"
              alt="not found"
              className={imageClasses}
            />
          </div>
        </Carousel>
      </div>
      {category &&
        category.map((cat) => (
          <>
            <div
              className="sm:mt-10 sm:mb-2 flex justify-center"
              key={cat.CategoryName}
            >
              <h1 className="text-center px-2 py-4 rounded-lg text-indigo-800 font-extrabold sm:text-3xl w-fit h-fit shadow-md shadow-black ">
                {cat.CategoryName}
              </h1>
            </div>
            <div className="grid grid-cols-1 justify-around md:grid-cols-2 lg:grid-cols-4 md:justify-evenly gap-4 mx-4 mt-4">
              {items &&
                items
                  .filter(
                    (item) =>
                      item.CategoryName === cat.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filteredItems, index) => (
                    <ListCards card={filteredItems} key={index} />
                  ))}
            </div>
          </>
        ))}
    </div>
  );
};

export default Home;
