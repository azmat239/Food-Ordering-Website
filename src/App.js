import Layout from "./Layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

function App() {
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
