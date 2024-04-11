import Layout from "./Layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { CartContextProvider } from "./Context/CartContext";
import { useState } from "react";

// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (carts) => {
    setCart((prev) => [...prev, { id: Date.now(), ...carts }]);
  };
  // one Way to Create Routes in React
  /* const router = createBrowserRouter(
     createRoutesFromElements(
       <Route path="/" element={<Layout />}>
         <Route path="" element={<Home />} />
         <Route path="login" element={<Login />} />
         <Route path="signup" element={<Signup />} />
       </Route>
     )
   );

 return <RouterProvider router={router} />;
*/

  // Another way to create a routing or routes in react

  return (
    <CartContextProvider value={{ cart, setCart, addCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
