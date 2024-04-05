import React from "react";
import Carousal from "../components/Carousal";
import ListCards from "../components/ListCards";

const Home = () => {
  const cardList = [
    {
      cardsinput: {
        name: "Pizza",
        des: "This is the description of the food that is above written ",
        imgSrc: "./logo.jpg",
        options: [
          {
            size: "small",
          },
          {
            size: "medium",
          },
          {
            size: "large",
          },
          {
            size: "extraLarge",
          },
        ],
      },
    },
    {
      cardsinput: {
        name: "Burger",
        des: "This is the description of the food that is above written ",
        imgSrc: "./logo.jpg",
        options: [
          {
            size: "small",
          },
          {
            size: "medium",
          },
          {
            size: "large",
          },
        ],
      },
    },
    {
      cardsinput: {
        name: "Burger",
        des: "This is the description of the food that is above written ",
        imgSrc: "./logo.jpg",
        options: [
          {
            size: "small",
          },
          {
            size: "medium",
          },
          {
            size: "large",
          },
        ],
      },
    },
  ];
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% relative">
      <Carousal />
      <div className="absolute bottom-[65%] sm:top-1/2 sm:left-[30%]">
        <h1 className="sm:text-2xl font-extrabold text-center  text-white shadow-md shadow-black px-2 py-1 sm:px-6 sm:py-2 rounded-xl [text-shadow:_1px_1px_1px_rgb(255_200_243_/_80%)] ">
          Welcome To Our Fo0Reso Order Website
        </h1>
      </div>
      <div className="sm:mt-10 sm:mb-2 flex justify-center">
        <h1 className="text-center px-2 py-4 rounded-lg text-indigo-800 font-extrabold sm:text-3xl w-fit h-fit shadow-md shadow-black">
          FoodList
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-around md:grid-cols-2 lg:grid-cols-3 md:justify-evenly gap-4 mx-4 mt-4">
        {cardList &&
          cardList.map((list, index) => (
            <ListCards card={list.cardsinput} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Home;
