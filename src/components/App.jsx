// import Counter from "./Counter/Counter"
// import Dropdown from './Dropdown/Dropdown'
// import ColorPicker from './ColorPicker/ColorPicker';
import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import initialTodos from '../todos.json'
import TodoEditor from "./TodoEditor/TodoEditor";
import { nanoid } from 'nanoid';
// import Filter from "./Filter/Filter";
import Modal from "./Modal/Modal";



// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ]

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    // console.log(parsedTodos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      complited: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // changeFiltter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalazeFilter = this.state.filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalazeFilter)
    );
  };

  calculateComplitedCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.complited ? total + 1 : total),
      0
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const complitedTodoCount = this.calculateComplitedCount();
    const visibleTodos = this.getVisibleTodos();

    // console.log(complitedTodoCount);
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Відкрити модальне вікно
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Привіт, це контент модалки як childrren</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              ducimus placeat iure aliquid, provident, cupiditate totam eveniet
              corporis repellat delectus error pariatur ipsa neque distinctio
              ipsam quibusdam fugit non. Quia!Lorem
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрити модальне вікно
            </button>
          </Modal>
        )}
        {/* <h2>Стан компонента</h2> */}
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions } /> */}
        {/* <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {complitedTodoCount}</p>
        </div> */}
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} />
        {/* <Filter value={filter} onChange={this.changeFiltter} /> */}
        <TodoEditor onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default App;
