import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./components/Dashboard";
import WorkoutPlan from "./components/WorkoutPlan";
import PlansPage from "./components/PlansPage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm";
import Nutrition from "./components/Nutrition";
import Register from "./components/RegisterForm";
import Challenges from "./components/ChallengesPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/plans",
    element: <PlansPage />,
  },
  {
    path: "/nutrition",
    element: <Nutrition />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/challenges",
    element: <Challenges />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
