import React from "react";

const ListCards = ({ card }) => {
  return (
    <div className="sm:w-[40vw] lg:w-fit flex border rounded-l-xl border-red-600 rounded-r-md shadow-lg shadow-black mb-4">
      <div>
        <img
          src={card.imgSrc}
          alt="400"
          width={100}
          height={100}
          className="h-[32vh] w-[50vw] sm:w-[20vw] aspect-square rounded-s-xl"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 justify-center items-start rounded-r-md bg-inherit">
        <div>
          <h1 className="font-bold text-red-900 text-lg ">{card.name}</h1>
          <p className="text-slate-700 text-md">{card.des}</p>
        </div>
        <div>
          <select className="outline-none rounded-md bg-green-300">
            {card.options &&
              card.options.length > 0 &&
              card.options.map((option) => (
                <option key={option.size} value={option.size}>
                  {option.size}
                </option>
              ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="p-2 bg-indigo-400 rounded-md font-semibold text-sm"
          >
            Add To Cart
          </button>
          <button
            type="button"
            className="p-2 bg-indigo-400 rounded-md font-semibold text-sm"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCards;
