import React, { useEffect } from "react";
import { useState } from "react";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";

export default function MyOrder() {
  const [orderData, setOrderData] = useState();

  const email = localStorage.getItem("email");
  useEffect(() => {
    const loadOrderData = async () => {
      try {
        let response = await fetch("http://localhost:5000/api/myorders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        response = await response.json();

        if (response.success === true) {
          setOrderData(response.order);
        } else {
          console.log("Nothing Found in response");
        }
      } catch (error) {
        console.log("Error", error.message);
      }
    };
    loadOrderData();
  }, [email]);
  console.log(orderData);
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pt-24 flex  justify-center">
      {orderData ? (
        <div className="pb-4">
          <div className="text-center">
            <span className="font-bold text-2xl font-mono text-pretty ">
              My Orders
            </span>
          </div>

          <div className="flex justify-center mb-4">
            <hr className="h-1 bg-red-600 w-[60vw] md:w-[90vw] " />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {orderData.orderArray
              ? orderData.orderArray.map((order) =>
                  order
                    ? order.map((item) => (
                        <div className="w-60 rounded-lg shadow-lg shadow-black  ">
                          <div>
                            <img
                              src={item.imgSrc}
                              alt="Not Found"
                              className="h-60 w-60 object-fill rounded-t-lg"
                            />
                          </div>
                          <div className="text-md font-medium text-center">
                            {item.name}
                          </div>
                          <div className="text-md font-medium text-center">
                            {item.des}
                          </div>
                          <div className="text-md font-medium text-center">
                            Size : {item.size}
                          </div>
                          <div className="text-md font-medium text-center">
                            Price : {item.totalPrice}
                          </div>
                          <div>
                            Ordered On : {item.date ? item.date : "no date"}
                          </div>
                        </div>
                      ))
                    : ""
                )
              : ""}
          </div>
        </div>
      ) : (
        <div className="mx-4 h-[100vh] flex flex-col gap-4 justify-center items-start text-white">
          <div className="flex justify-center items-center">
            <span className="text-5xl text-center ">My Orders</span>
            <div className="text-center">
              <GiEmptyMetalBucketHandle className="text-5xl" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl">No Orders Found </span>
            <span className="text-xl">
              Please PurChase Some Of Our Items TheY Are the best Tasty Foods
              Available in The Market
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
