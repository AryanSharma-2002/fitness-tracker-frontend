import React, { useState } from "react";

function ActivityForm({ onSubmit }) {
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [sets, setSets] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ activityType, duration, distance, sets });
    setActivityType("");
    setDuration("");
    setDistance("");
    setSets("");
  };

  return (
    <section>
      <h2>Track Your Fitness Activities</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activity-type">Activity Type:</label>
        <select
          id="activity-type"
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
        >
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
          <option value="weightlifting">Weightlifting</option>
        </select>

        <label htmlFor="duration">Duration (minutes):</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <label htmlFor="distance">Distance (miles):</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />

        <label htmlFor="sets">Sets:</label>
        <input
          type="number"
          id="sets"
          name="sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />

        <button type="submit">Track Activity</button>
      </form>
    </section>
  );
}

export default ActivityForm;
