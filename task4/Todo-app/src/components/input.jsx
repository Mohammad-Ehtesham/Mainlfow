import { useState } from "react";
import { RiAddLargeLine } from "react-icons/ri";

function TodoInput({ addNewItem }) {
  const [dateTime, setdateTime] = useState("");
  const [name, setname] = useState("");

  const handleDateTime = (event) => {
    setdateTime(event.target.value);
  };
  const handleName = (event) => {
    setname(event.target.value);
  };

  const handleButton = () => {
    if (name === "" && dateTime === "") {
      alert("First write something");
      return;
    }
    addNewItem(name, dateTime);
    setdateTime("");
    setname("");
  };

  return (
    <>
      <div className="row align-items-start kg-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Add-todo"
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="col">
          <input
            type="datetime-local"
            className="form-control"
            value={dateTime}
            onChange={handleDateTime}
          />
        </div>
        <div className="col right">
          <button className="btn btn-success " onClick={handleButton}>
            Add
            <RiAddLargeLine />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoInput;
