import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
import NutritionTrackingPage from "./NutritionTrackingPage";
import Day from "./Day";
import MealRow from "./MealRow";
import "../css/nutrition.css";

const Nutrition = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <NutritionTrackingPage />
    </div>
  );
};

export default Nutrition;
