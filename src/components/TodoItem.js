import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { id, title, onEdit, onDelete } = this.props;
    return (
      <li className="list-group-item  d-flex justify-content-between capitalize-text">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={() => onEdit(id)}>
            <i style={{ cursor: "pointer" }} className="fa fa-pen"></i>
          </span>
          <span
            style={{ cursor: "pointer" }}
            className="mx-2 text-danger"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
