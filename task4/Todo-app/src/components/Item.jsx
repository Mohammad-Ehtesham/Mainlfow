import { useState } from "react";
import AddedItem from "./addeditem";

function TodoItem({ TodoItem, onDelete }) {
  return (
    <div className="row align-items-start kg-row">
      {TodoItem.map((Item) => (
        <AddedItem
          key={Item.name}
          ItemName={Item.name}
          ItemDate={Item.dateTime}
          handledelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoItem;
