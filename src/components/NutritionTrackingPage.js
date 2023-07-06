import React, { useState } from "react";
import Day from "./Day";
import MealRow from "./MealRow";

const NutritionTrackingPage = () => {
  const [meals, setMeals] = useState({
    Monday: [
      { mealName: "Breakfast", foodName: "Oatmeal" },
      { mealName: "Lunch", foodName: "Salad" },
      { mealName: "Dinner", foodName: "Grilled Chicken" },
    ],
    Tuesday: [
      { mealName: "Breakfast", foodName: "Avocado Toast" },
      { mealName: "Lunch", foodName: "Quinoa Bowl" },
      { mealName: "Dinner", foodName: "Salmon with Roasted Veggies" },
    ],
    Wednesday: [
      { mealName: "Breakfast", foodName: "Scrambled Eggs" },
      { mealName: "Lunch", foodName: "Turkey Sandwich" },
      { mealName: "Dinner", foodName: "Pasta with Tomato Sauce" },
    ],
    Thursday: [
      { mealName: "Breakfast", foodName: "Smoothie Bowl" },
      { mealName: "Lunch", foodName: "Chicken Caesar Salad" },
      { mealName: "Dinner", foodName: "Grilled Steak with Mashed Potatoes" },
    ],
    Friday: [
      { mealName: "Breakfast", foodName: "Greek Yogurt with Berries" },
      { mealName: "Lunch", foodName: "Sushi Roll" },
      { mealName: "Dinner", foodName: "Vegetable Stir-Fry" },
    ],
    Saturday: [
      { mealName: "Breakfast", foodName: "Pancakes with Maple Syrup" },
      { mealName: "Lunch", foodName: "Grilled Shrimp Salad" },
      { mealName: "Dinner", foodName: "Baked Salmon with Asparagus" },
    ],
    Sunday: [
      { mealName: "Breakfast", foodName: "French Toast" },
      { mealName: "Lunch", foodName: "Caprese Salad" },
      { mealName: "Dinner", foodName: "Steak with Sweet Potato Fries" },
    ],
  });

  const handleAddMeal = (day, meal) => {
    const updatedMeals = { ...meals };
    updatedMeals[day] = [...meals[day], meal];
    setMeals(updatedMeals);
  };

  const handleDeleteMeal = (day, updatedMeals) => {
    const updatedMealData = { ...meals, [day]: updatedMeals };
    setMeals(updatedMealData);
  };

  return (
    <div className="nutrition-tracking-page">
      <Day
        dayName="Monday"
        meals={meals.Monday}
        deleteMeal={handleDeleteMeal}
        handleAddMeal={handleAddMeal}
      />
      <Day
        dayName="Tuesday"
        meals={meals.Tuesday}
        deleteMeal={handleDeleteMeal}
        handleAddMeal={handleAddMeal}
      />
      <Day
        dayName="Wednesday"
        meals={meals.Wednesday}
        deleteMeal={handleDeleteMeal}
        handleAddMeal={handleAddMeal}
      />
      <Day
        dayName="Thursday"
        meals={meals.Thursday}
        deleteMeal={handleDeleteMeal}
        handleAddMeal={handleAddMeal}
      />
      <Day
        dayName="Friday"
        meals={meals.Friday}
        deleteMeal={handleDeleteMeal}
        handleAddMeal={handleAddMeal}
      />
      <Day
        dayName="Saturday"
        meals={meals.Saturday}
        deleteMeal={handleDeleteMeal}
        handleAddMeal={handleAddMeal}
      />
      <Day
        dayName="Sunday"
        meals={meals.Sunday}
        deleteMeal={handleDeleteMeal}
        handleAddMeal={handleAddMeal}
      />
    </div>
  );
};
export default NutritionTrackingPage;
