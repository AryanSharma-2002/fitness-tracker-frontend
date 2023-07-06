import Button from "react-bootstrap/Button";

import React from "react";

const MealRow = ({ mealName, foodName, onDelete }) => {
  const handleDelete = () => {
    onDelete(mealName, foodName);
  };

  return (
    <tr>
      <td>{mealName}</td>
      <td>{foodName}</td>
      <td className="delete-meal">
        <Button variant="primary" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default MealRow;
