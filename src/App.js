import React, { Component } from "react";
import List from "./components/TodoList";
import Input from "./components/TodoInput";

import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("Handle Change");
  };
  handleSubmit = (e) => {
    console.log("Handle Submit");
  };
  handleClearList = () => {
    console.log("Handle Clear List");
  };
  handleDelete = (id) => {
    console.log(`Handle Delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`Handle Edit ${id}`);
  };

  render() {
    console.log(this.state.id);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <Input
              item={this.state.item}
              editItem={this.state.editItem}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <List
              items={this.state.items}
              onClearList={this.handleClearList}
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
