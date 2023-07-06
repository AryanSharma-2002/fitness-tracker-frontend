import React, { useState } from "react";
import MealRow from "./MealRow";

const Day = ({ dayName, meals, deleteMeal, handleAddMeal }) => {
  const handleDeleteMeal = (index) => {
    const updatedMeals = [...meals];
    updatedMeals.splice(index, 1);
    deleteMeal(dayName, updatedMeals);
  };
  const [foodName, setFoodName] = useState();
  const [mealName, setMealName] = useState();

  return (
    <div className="day">
      <h2 className="heading-day">{dayName}</h2>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Food</th>
            <th className="delete-meal">Delete</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal, index) => (
            <MealRow
              key={index}
              mealName={meal.mealName}
              foodName={meal.foodName}
              onDelete={() => handleDeleteMeal(index)}
            />
          ))}
        </tbody>
      </table>
      <div className="add-meal-container">
        <input
          type="text"
          placeholder="Meal Name"
          onChange={(e) => setMealName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Food Name"
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button onClick={() => handleAddMeal(dayName, { mealName, foodName })}>
          Add Meal
        </button>
      </div>
    </div>
  );
};

export default Day;
