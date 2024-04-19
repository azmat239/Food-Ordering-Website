import React from "react";
import { useCart } from "../Context/CartContext";
import { CgTrashEmpty } from "react-icons/cg";

const CartList = () => {
  const { cart } = useCart();
  return (
    <div>
      {cart.length !== 0 ? (
        <div className="grid grid-cols-4 gap-4 justify-center items-center text-center text-white">
          {cart.map((cart) => (
            <div key={cart.id} className="w-48 bg-black rounded-md p-2">
              <div>
                <img
                  src={cart.imgSrc}
                  alt="No"
                  className="w-60 h-24 rounded-t-md"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <span className="text-lg font-extrabold text-purple-500">
                  {cart.name}
                </span>
                <span className="text-sm">{cart.des}</span>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <span className="text-sm">
                  Size:{"   "}
                  <span className="text-indigo-500 font-bold text-md">
                    {cart.size}
                  </span>
                </span>
                <span className="text-sm">
                  Quantity:{"    "}
                  <span className="text-indigo-500 font-bold text-md">
                    {cart.Quantity}
                  </span>
                </span>
              </div>
              <div className="text-md font-bold  ">
                Price : {cart.totalPrice}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-80">
          <div className="text-5xl flex gap-2">
            No Item In The Cart <CgTrashEmpty />
          </div>
          <p>Add Some Items To The Cart</p>
        </div>
      )}
    </div>
  );
};

export default CartList;
