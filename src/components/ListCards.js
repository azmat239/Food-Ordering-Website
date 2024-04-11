import classNames from "classnames";
import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../Context/CartContext";

const ListCards = ({ card }) => {
  const { addCart } = useCart([]);
  const [size, setSize] = useState();
  const priceRef = useRef();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState();
  const [cart, setCart] = useState();
  let options = card.options[0];
  let priceOptions = Object.keys(options);
  const buttonClasses = classNames(
    "p-2 bg-indigo-400 rounded-md font-semibold text-sm hover:bg-indigo-800 hover:text-white transition all ease-in"
  );

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  useEffect(() => {
    if (size && options[size]) {
      setTotalPrice(quantity * parseInt(options[size]));
    }
    setCart({
      imgSrc: card.img,
      name: card.name,
      des: card.description,
      size: size,
      Quantity: quantity,
      totalPrice: totalPrice,
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

  const addToCart = () => {
    if (cart) {
      addCart(cart);
    }
  };
  return (
    <div className=" border rounded-l-xl border-none rounded-b-md shadow-lg shadow-black mb-10">
      <div>
        <img
          src={card.img}
          alt="400"
          className="aspect-square rounded-t-xl object-fill h-[25vh] w-96 lg:h-[40vh] lg:w-96"
        />
      </div>
      <div className="flex flex-col px-2 mt-2 justify-center items-start rounded-r-md bg-inherit">
        <div>
          <h1 className="font-bold text-red-900 text-lg text-center">
            {card.name}
          </h1>
          <p className="text-slate-700 text-md text-center">
            {card.description}
          </p>
        </div>
        <div className="flex flex-col gap-2 font-bold justify-center">
          <div className="flex justify-center">
            <select
              className="outline-none rounded-md bg-green-300 p-1 mr-2"
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
              className="outline-none rounded-md bg-green-300 p-1"
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
        </div>
        <div className="flex gap-2 my-2 md:my-4">
          <hr />
          <button type="button" className={buttonClasses} onClick={addToCart}>
            Add To Cart
          </button>
          <button type="button" className={buttonClasses}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCards;
