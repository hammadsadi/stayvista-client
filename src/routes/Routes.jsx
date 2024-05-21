import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";

import Statistic from "../pages/Dashboard/Statistic/Statistic";
import AddRooms from "../pages/Dashboard/Gest/AddRooms";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyListing from "../pages/Dashboard/Gest/MyListing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            {" "}
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <Statistic />,
      },
      {
        path: "add-room",
        element: <AddRooms />,
      },
      {
        path: "my-listings",
        element: <MyListing />,
      },
    ],
  },
]);
