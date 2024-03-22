import { createBrowserRouter, Navigate } from "react-router-dom";
  
import { App } from '../App';
import { MarvelPage , DcPage, SearchHeroes, HeroPage } from './../heroes/';
import { LoginPage } from '../auth/';
  
 export const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/",
      element: <App/>,
      children : [
        {
          path: "/marvel/",
          element: <MarvelPage/>,
        },
        {
          path: "/dc/",
          element: <DcPage/>,
        },
        {
          path: "/search/",
          element: <SearchHeroes/>,
        },
        {
          path: "/heroe/:id",
          element: <HeroPage/>,
        },
        {
          path: "/*",
          element: <Navigate to="/marvel/" replace />,
        },
      ]
    }
]);