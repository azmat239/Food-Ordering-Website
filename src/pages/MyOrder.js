import React, { useEffect } from "react";
import { useState } from "react";

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
    <div>
      {/* {orderData.orderArray
        ? orderData.orderArray.map((ord) =>
            ord.map((or) => (
              <div className="flex flex-col gap-4"> {or.name}</div>
            ))
          )
        : []} */}
      {orderData ? (
        <div className="mt-32">
          <div>
            <span>My Orders</span>
          </div>
          <div className="my-4">{orderData.Date}</div>
          <div>
            <hr className="h-1 w-screen " />
          </div>
          <div>
            {orderData.orderArray
              ? orderData.orderArray.map((order) => (
                  <div>
                    {order
                      ? order.map((item) => (
                          <div>
                            <div>
                              <img
                                src={item.imgSrc}
                                alt="Not Found"
                                className="w-48 h-48"
                              />
                            </div>
                            <div>{item.name}</div>
                            <div>{item.des}</div>
                            <div>{item.size}</div>
                            <div>{item.totalPrice}</div>
                          </div>
                        ))
                      : ""}
                  </div>
                ))
              : ""}
          </div>
        </div>
      ) : (
        <div className="mt-32">
          <div>
            <span>My Orders</span>
          </div>
          <div className="flex flex-col">
            <span>No Orders Found </span>
            <span>
              Please PurChase Some Of Our Items TheY Are the best Tasty Foods
              Available in The Market
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
