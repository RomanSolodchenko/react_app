import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  //creating an event constructor
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    // function of adding to the storage of elements
    // функция добавления в хранилище элементов
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    // create an element with a unique identifier
    // создать элемент с уникальным идентификатором
    const newItem = {
      id: 1 + Math.random(), // assigning a unique identifier //присвоение уникального идентификатора
      value: this.state.newItem.slice(),
    };

    // copy the elements of the current list
    //скопируйте элементы текущего списка
    const list = [...this.state.list];

    // add a new item to the list
    //добавить новый элемент в список
    list.push(newItem);

    // update the state of the combo box and discard the input of the new item
    // обновите состояние поля со списком и отмените ввод нового элемента
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id) {
    // copy the current list of items
    //скопируйте текущий список элементов
    const list = [...this.state.list];

    // filter the removed item
    //отфильтровать удаленный элемент
    const updatedList = list.filter((item) => item.id !== id);
    
    // update the list after deleting the object
    //обновите список после удаления объекта
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App_block">
        <div className="AppTodo">
          <div className="TodoContent">
            <div className="TodoHeader">To-Do list</div>
            <br />
            <div className="TodoInput">
              <input
                className="Input"
                type="text"
                placeholder="Enter"
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
              />
              <button className="btn-in" onClick={() => this.addItem()}>
                Add
              </button>
            </div>
            <br />
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li className="Output" key={item.id}>
                    {item.value}
                    <button
                      className="btn-del"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
