import { useState } from "react";
import "./App.css";
import TodoHeading from "./components/heading";
import TodoInput from "./components/input";
import TodoItem from "./components/Item";
import Welcometodo from "./components/error";

function App() {
  const itm = [
    {
      name: "Buy Butter",
      dateTime: "12-07-2024 8:38",
    },
  ];

  const [item, setItem] = useState([]);

  const handleItem = (todname, todoDatetime) => {
    let newlist = [
      ...item,
      {
        name: todname,
        dateTime: todoDatetime,
      },
    ];
    setItem(newlist);
  };

  const handleDelete = (todolistname) => {
    const newtodlist = item.filter((item) => item.name !== todolistname);
    setItem(newtodlist);
  };
  return (
    <>
      <div className="container text-center">
        <TodoHeading />
        <TodoInput addNewItem={handleItem}></TodoInput>
        <Welcometodo AvailableItem={item} />
        <TodoItem TodoItem={item} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
