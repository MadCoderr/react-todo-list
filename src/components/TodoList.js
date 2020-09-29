import React, { Component } from "react";
import Item from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, onClearList, onDelete, onEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
        <button
          className="btn btn-block btn-danger mt-5 text-uppercase"
          onClick={onClearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
