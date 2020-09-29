import React, { Component } from "react";
import "../css/TodoInput.css";

class TodoInput extends Component {
  render() {
    const { item, editItem, onChange, onSubmit } = this.props;
    return (
      <div className="card card-body mt-3">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize test"
              placeholder="add todo item"
              value={item}
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block mt-3 btn-primary text-uppercase"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
