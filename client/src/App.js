import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  
} from "react-router-dom";

import Register from "./page/Register";
import Login from "./page/Login";
import Write from "./page/Write";
import Home from "./page/Home";
import Single from "./page/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"
import { AuthContextProvider } from "./context/authContext.js";
// import { Children } from "react";

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },

      {
        path:"/write",
        element:<Write />
      },

    ]
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },


]);


function App() {
  return (
     <AuthContextProvider>
 <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
       
    </div>
    </div>
        </AuthContextProvider>
   
  );
}

export default App;

