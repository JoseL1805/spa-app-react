import { createBrowserRouter, createHashRouter, Navigate } from "react-router-dom";
  
import { App } from '../App';
import { MarvelPage , DcPage, SearchHeroes, HeroPage } from './../heroes/';
import { LoginPage } from '../auth/';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
  
 export const router = createHashRouter([
    {
      path: "/login",
      element: <PublicRoute> <LoginPage/> </PublicRoute> ,
    },
    {
      path: "/",
      element: <PrivateRoute> <App/> </PrivateRoute>,
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
          path: "/",
          element: <Navigate to="/marvel/" replace />,
        },
      ]
    }
]);