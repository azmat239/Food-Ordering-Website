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
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Carousal />
      <div className="mt-10 mb-2 ">
        <h1 className="text-center text-indigo-800 font-extrabold text-5xl">
          FoodList
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-around md:grid-cols-2 lg:grid-cols-3 md:justify-evenly gap-4 mx-4 mt-4">
        {cardList &&
          cardList.map((list) => <ListCards card={list.cardsinput} />)}
      </div>
    </div>
  );
};

export default Home;
