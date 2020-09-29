import React, { Component } from "react";
import List from "./components/TodoList";
import Input from "./components/TodoInput";

import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    let items = [];
    if (!this.state.editItem) {
      items = [...this.state.items, newItem];
    } else {
      items = this.state.items.map((item) =>
        item.id === newItem.id ? newItem : item
      );
    }

    this.setState({
      items: items,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  handleClearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  handleEdit = (id, title) => {
    this.setState({
      item: title,
      id: id,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 my-5">
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
