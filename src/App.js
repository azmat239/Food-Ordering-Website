import Layout from "./Layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
