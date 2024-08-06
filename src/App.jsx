import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Protfolio from "./components/Protfolio/Protfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Layout from "./components/Layout/Layout";

export default function App() {
  const myRouter = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Home", element: <Home /> },
        { path: "/About", element: <About /> },
        { path: "/Protfolio", element: <Protfolio /> },
        { path: "/Contact", element: <Contact /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  );
}
