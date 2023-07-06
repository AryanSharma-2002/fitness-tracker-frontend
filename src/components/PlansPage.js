import React, { useEffect, useState } from "react";
import WorkoutPlan from "./WorkoutPlan";
import "../css/plans.css";
import Navbar from "./Navbar";
import axios from "axios";
import BASE_URL from "../helper/config";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function PlansPage() {
  const [show, setShow] = useState(false);

  const [toggle, setToggle] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const img = [
    {
      first: require("../images/beg 1.jpg"),
      second: require("../images/beg 2.jpg"),
      third: require("../images/beg 3.webp"),
    },
    {
      first: require("../images/hiit 1.webp"),
      second: require("../images/hiit4.png"),
      third: require("../images/hiit5.jpg"),
    },
    {
      first: require("../images/cardio 1.jpg"),
      second: require("../images/cardio 2.jpg"),
      third: require("../images/cardio 3.jpg"),
    },
    {
      first: require("../images/cardio 1.jpg"),
      second: require("../images/cardio 2.jpg"),
      third: require("../images/cardio 3.jpg"),
    },
    {
      first: require("../images/cardio 1.jpg"),
      second: require("../images/cardio 2.jpg"),
      third: require("../images/cardio 3.jpg"),
    },
    {
      first: require("../images/cardio 1.jpg"),
      second: require("../images/cardio 2.jpg"),
      third: require("../images/cardio 3.jpg"),
    },
  ];
  const [plan, setPlan] = useState({
    title: "",
    description: "",
    instructions: [],
  });
  const [temp, setTemp] = useState("");
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(BASE_URL + "/api/plans");
      console.log(response.data);
      setAllData(response.data);
    };
    getData();
  }, [toggle]);
  const handleAddPlan = async () => {
    try {
      setPlan((prevPlan) => {
        return { ...prevPlan, instructions: temp.split(",") };
      });
      console.log(plan);
      const response = await axios.post(BASE_URL + "/api/plans", plan);
      setToggle(!toggle);
    } catch (error) {
      console.log("error while adding", error);
      alert("error while adding plan", error.message);
    }
  };
  return (
    <div>
      <Navbar />
      <header>
        <h1 className="workout-plan">Workout Plans</h1>
      </header>
      {allData.map((ele, index) => {
        return (
          <WorkoutPlan
            title={ele.title}
            description={ele.description}
            instructions={ele.instructions}
            images={[img[index].first, img[index].second, img[index].third]}
            key={ele._id}
          />
        );
      })}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Add Plan
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title of plan"
                onChange={(e) => {
                  setPlan((prevPlan) => {
                    return { ...prevPlan, title: e.target.value };
                  });
                }}
              />
              <Form.Text className="text-muted">
                By title we define your plan
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describe your plan"
                onChange={(e) => {
                  setPlan((prevPlan) => {
                    return { ...prevPlan, description: e.target.value };
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                type="text"
                placeholder="Instructions of plans"
                onChange={(e) => {
                  setTemp(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                Seperate Instructions by comma
              </Form.Text>
            </Form.Group>

            <Button variant="primary" onClick={handleAddPlan}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <WorkoutPlan
        title="High-Intensity Interval Training (HIIT)"
        description="An intense cardio workout plan to boost metabolism and burn calories."
        instructions={[
          "Jumping Jacks: 3 sets of 30 seconds",
          "Mountain Climbers: 3 sets of 30 seconds",
          "Burpees: 3 sets of 10 reps",
          "High Knees: 3 sets of 30 seconds",
          "Bicycle Crunches: 3 sets of 12 reps per side",
        ]}
        images={[
          require("../images/hiit 1.webp"),
          require("../images/hiit4.png"),
          require("../images/hiit5.jpg"),
        ]}
      />

      <WorkoutPlan
        title="Cardio Blast"
        description="A high-intensity cardio workout to improve endurance and burn calories."
        instructions={[
          "Jumping Jacks: 3 sets of 30 seconds",
          "High Knees: 3 sets of 30 seconds",
          "Mountain Climbers: 3 sets of 30 seconds",
          "Burpees: 3 sets of 10 reps",
          "Running: 20 minutes",
        ]}
        images={[
          require("../images/cardio 1.jpg"),
          require("../images/cardio 2.jpg"),
          require("../images/cardio 3.jpg"),
        ]}
      /> */}
    </div>
  );
}

export default PlansPage;
