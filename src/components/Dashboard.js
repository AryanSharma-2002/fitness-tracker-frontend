import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import ProgressCircle from "./ProgressCircle";
import SmallCircle from "./SmallCircle";
import ActivityForm from "./ActivityForm";
import ActivityEntry from "./ActivityEntry";
import "../css/Dashboard.css";
import BASE_URL from "../helper/config";

function App() {
  const [entryCounter, setEntryCounter] = useState(1);
  const [activityEntries, setActivityEntries] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/activity`);
      setActivityEntries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      formData.activity = formData.activityType;
      formData.sno = entryCounter;
      const response = await axios.post(`${BASE_URL}/api/activity`, formData);

      const newEntry = { ...response.data, serialNo: entryCounter };
      setActivityEntries((prevEntries) => [...prevEntries, newEntry]);
      setEntryCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditEntry = async (entry) => {
    try {
      await axios.delete(`${BASE_URL}/api/activity`, {
        data: { sno: entry.serialNo },
      });
      setActivityEntries((prevEntries) =>
        prevEntries.filter((e) => e.serialNo !== entry.serialNo)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteEntry = async (entry) => {
    try {
      await axios.delete(`${BASE_URL}/api/activity`, {
        data: { sno: entry.serialNo },
      });
      setActivityEntries((prevEntries) =>
        prevEntries.filter((e) => e.serialNo !== entry.serialNo)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="frame-container">
        <div className="frame">
          <div className="center">
            <div className="headline">
              <div className="small">your daily</div>
              progress
            </div>
            <ProgressCircle value={2758} smallText="kcal" />
            <div className="circles-small">
              <SmallCircle value={8563} smallText="steps" circleClass="one" />
              <SmallCircle value={6.2} smallText="km" circleClass="two" />
            </div>
          </div>
        </div>
      </div>
      <ActivityForm onSubmit={handleFormSubmit} />
      <section id="activity-entries">
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Activity Type</th>
              <th>Duration</th>
              <th>Distance</th>
              <th>Sets</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activityEntries.map((entry) => (
              <ActivityEntry
                key={entry.serialNo}
                entry={entry}
                onEdit={handleEditEntry}
                onDelete={handleDeleteEntry}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
