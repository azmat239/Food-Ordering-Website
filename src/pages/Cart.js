import React from "react";
import { useCart } from "../Context/CartContext";
import CartList from "../components/CartList";
import { MdCancel } from "react-icons/md";
export default function Cart({ onClose }) {
  let { cart, setCart } = useCart();
  let totalPrice = 0;
  cart.map((cart) => (totalPrice += cart.totalPrice));
  let emailLog = localStorage.getItem("email");
  const handleCheckout = async () => {
    let response = await fetch("http://localhost:5000/api/orderdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailLog,
        orderArray: cart,
      }),
    });

    response = await response.json();

    if (response.success === true) {
      setCart([]);
    } else if (response.success === false) {
      alert("failed");
    }
  };
  const handleRemove = () => {
    setCart([]);
  };
  return (
    <div className="z-10 absolute top-0 right-60 bg-white shadow-md shadow-black border border-md h-[80vh] w-[60vw] p-4 rounded-md scrollbar-hide overflow-auto">
      <div className="flex justify-end my-2  ">
        <button onClick={onClose}>
          {" "}
          <MdCancel className="text-5xl text-red-500" />
        </button>
      </div>

      <CartList />
      <span className="text-lg font-black text-black ">
        {totalPrice === 0 ? "" : `Total Price : ${totalPrice}`}
      </span>
      {cart.length !== 0 ? (
        <div className="flex gap-4 ">
          <button
            onClick={handleCheckout}
            className=" bg-green-500 px-3 py-2 text-lg font-medium rounded-md hover:bg-green-200 transition-all ease-in delay-100"
          >
            Checkout
          </button>
          <button
            onClick={handleRemove}
            className="bg-red-600 px-4 py-2 text-lg font-medium rounded-lg hover:bg-red-300 transition-all ease-in delay-100"
          >
            Remove
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
