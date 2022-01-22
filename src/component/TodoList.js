import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeamOmegaModelPopUp from './common/TeamOmegaModelPopUp';

import ListGoup from './ListGroup';
import TodoForm from './common/TodoForm';

toast.configure();

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      editableTodo: { text: '', id: null },
    };
  }


  addTodo = todo => {
    if (!todo.text)
      return
    this.setState(prev => ({ editableText: { ...prev.editableText }, todos: [todo, ...this.state.todos] }))
    toast.success(`"${todo.text}" ITEM IS ADDED !`, { autoClose: 1000 });

  }

  removeTodo = rtodo => {
    const removeArr = this.state.todos.filter(todo => todo.id !== rtodo.id)
    this.setState(prev => ({ editableText: { ...prev.editableText }, todos: [...removeArr] }));
    toast.error(` ITEM WITH NAME "${rtodo.text}" IS DELETED !`, { position: toast.POSITION.TOP_LEFT, autoClose: 2000 });
  }

  updateTodo = (todo) => this.setState(prev => ({ editableTodo: todo, todos: [...prev.todos] }));


  update = (todoId, text) => {
    if (!text) {
      this.setState(prev => ({ editableTodo: { id: null, text: '' }, todos: [...prev.todos] }))
      return;
    }
    let it = { id: todoId, text: text };

    if (text === this.state.editableTodo.text)
      toast.warn(`"${text}" ITEM IS NOT UPDATED !`, { position: toast.POSITION.TOP_CENTER, autoClose: 3000 });
    else
      toast.success(`ITEM WITH NAME "${this.state.editableTodo.text}" IS UPDATED TO ${text}`, { autoClose: 1000 });

    this.setState(prev => ({ editableTodo: { id: null, text: '' }, isChanged: false, todos: [...prev.todos.map(item => (item.id === todoId ? it : item))], modal: false }))

  }

  render = () => <div className='container-fluid' data-test="TodoListApp_Component">

    <TeamOmegaModelPopUp editableTodo={this.state.editableTodo} isUpdate={this.update} />
    <div className='container mb-5'>
      <TodoForm onSubmit={this.addTodo} className="row align-items-center justify-content-center " />
    </div>
    <div className='row gap-1 '>
      <ListGoup todos={this.state.todos} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
    </div>

  </div>

}

export default TodoList
