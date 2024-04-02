import React from "react";

const ListCards = ({ card }) => {
  return (
    <div className="flex gap-2 border border-black rounded-l-xl rounded-r-md ">
      <div>
        <img
          src={card.imgSrc}
          alt="400"
          width={100}
          height={100}
          className="h-[28vh] w-[20vw] aspect-square rounded-s-xl"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-start">
        <div>
          <h1 className="font-bold text-red-900 text-lg">{card.name}</h1>
          <p className="text-slate-700 text-md">{card.des}</p>
        </div>
        <div>
          <select>
            {card.options &&
              card.options.length > 0 &&
              card.options.map((option) => (
                <option key={option.size} value={option.size}>
                  {option.size}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ListCards;
