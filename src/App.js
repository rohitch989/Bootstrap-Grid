import React, { Component } from 'react';
import TodoListApp from './component/TodoList';
import './App.css';
import TeamOmegaHeader from './component/common/TeamOmegaHeader';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'


class App extends Component {
  render() {
    return <div className=' app bg-info d-flex flex-column  align-items-center' role="main" data-test="appComponent">
      <TeamOmegaHeader text='Todo App' type="h1" className="my-5" />
      <TodoListApp />
    </div>
  }
}

export default App;
