import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TeamOmegaButton from './common/TeamOmegaButton';


class ListGroup extends Component {



  render() {
    const { todos, removeTodo, updateTodo } = this.props;
    return todos.length > 0 && todos.map((todo, index) => (
      <div key={index} className='d-flex container bg-dark border-primary align-items-center justify-content-between col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-light rounded-pill my-2 ' data-test='ListGroup_Component'>
        <div className='mx-3 overflow-hidden'>
          <p className='m-0 text-light'> {todo.text}</p>
        </div>
        <div >
          <TeamOmegaButton className='btn btn-outline-danger border-0  p-1 pt-0 align-center m-2' text={<RiCloseCircleLine />} click={() => removeTodo(todo)} ariaLabel="Delete" />

          <TeamOmegaButton className='btn btn-outline-info border-0 p-1 pt-0 align-items-center m-2' dataBsToggle="modal" dataBsTarget="#exampleModal" text={<TiEdit />} click={() => updateTodo(todo)} ariaLabel="Edit" />

        </div>

      </div>
    ));
  }
}

ListGroup.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func
}

export default ListGroup
