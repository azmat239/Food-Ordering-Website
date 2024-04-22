import classNames from "classnames";
import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router";

const ListCards = ({ card }) => {
  const { addCart } = useCart([]);
  const [size, setSize] = useState();
  const priceRef = useRef();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState();
  const [carts, setCarts] = useState();
  const navigate = useNavigate();
  let options = card.options[0];
  let priceOptions = Object.keys(options);
  const emailLog = localStorage.getItem("email");
  const buttonClasses = classNames(
    "p-2 bg-indigo-400 rounded-md font-semibold text-sm hover:bg-indigo-800 hover:text-white transition all ease-in w-36  shadow-md shadow-black"
  );

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  useEffect(() => {
    if (size && options[size]) {
      setTotalPrice(quantity * parseInt(options[size]));
    }
    setCarts({
      imgSrc: card.img,
      name: card.name,
      des: card.description,
      size: size,
      Quantity: quantity,
      totalPrice: totalPrice,
      date: new Date().toLocaleDateString(),
    });
  }, [
    size,
    quantity,
    options,
    card.img,
    card.name,
    card.description,
    totalPrice,
  ]);

  const addToCart = async () => {
    if (emailLog) {
      if (carts) {
        addCart(carts);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className=" border rounded-l-xl border-none rounded-b-md shadow-lg shadow-black mb-10 w-72 mx-2">
      <div>
        <img
          src={card.img}
          alt="400"
          className="aspect-square rounded-t-xl object-fill h-[25vh] w-96 lg:h-[40vh] lg:w-96"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 mt-2 justify-center items-start rounded-r-md bg-inherit">
        <div>
          <h1 className="font-bold text-red-900 text-lg text-center">
            {card.name}
          </h1>
          <p className="text-slate-700 text-sm text-center">
            {card.description}
          </p>
        </div>
        <div className="flex flex-col gap-2 font-bold justify-center">
          <div className="flex justify-center">
            <select
              className="outline-none rounded-md bg-green-300 px-4 py-1 w-16 mr-2  focus:shadow-md focus:shadow-black"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            >
              {Array.from(Array(6), (e, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="outline-none rounded-md bg-green-300 px-4 py-1 w-28 focus:shadow-md focus:shadow-black"
              ref={priceRef}
              onChange={(e) => {
                setSize(e.target.value);
              }}
            >
              {priceOptions &&
                priceOptions.map((data) => (
                  <option value={data} key={data}>
                    {data}
                  </option>
                ))}
            </select>
          </div>

          <p className="text-center text-md text-white font-bold w-32">
            Total Price : {totalPrice}{" "}
          </p>
          <div className="flex justify-center my-2 sm:w-60 ">
            <button type="button" className={buttonClasses} onClick={addToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCards;
