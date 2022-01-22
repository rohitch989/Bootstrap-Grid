import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../App.mock'
import TodoListApp from '../../component/TodoList';
import TodoForm from "../../component/common/TodoForm"
import ListGroup from '../../component/ListGroup'
import TeamOmegaModelPopUp from '../../component/common/TeamOmegaModelPopUp';

const setUp = shallow(<TodoListApp />);

let todo = {
  id: Math.floor(Math.random() * 10000),
  text: "Hello"
};

describe('TodoList App Component', () => {

  let component, wrapper;

  beforeAll(() => component = setUp);

  it("--> render", () => expect(findByTestAttr(component, "TodoListApp_Component")).toEqual(true));


  describe('-->Instance Method', () => {
    let length;

    beforeEach(() => {
      wrapper = component.instance();
      length = component.state().todos.length;
    })

    it('--> add a todo', () => {
      wrapper.addTodo(todo);
      expect(component.state().todos.length).toBeGreaterThan(length)
    });

    it('-->update editableTodo', () => {
      wrapper.updateTodo(todo);
      expect(component.state().editableTodo).toEqual(todo)
    })

    it(`-->update text of a todo`, () => {
      let id = component.state().editableTodo.id;
      let text = "welcome";
      wrapper.update(id, text);
      let m = component.state().todos.find(item => item.id === id);
      expect(m.text).toEqual(text);
    })

    it('-->remove a todo', () => {
      wrapper.removeTodo(todo);
      expect(component.state().todos.length).toBe(--length);
    });

  })

  describe('-->Child Component', () => {

    describe('-->Form', () => {

      beforeEach(() => wrapper = component.find(TodoForm))

      it('--> contain  Form', () => expect(wrapper.name()).toEqual("TodoForm"));

      it('--> render', () => expect(findByTestAttr(wrapper.dive(), "TodoForm_Component")).toEqual(true));

      it("--> Submission add todo", () => {
        wrapper.props().onSubmit(todo);
        expect(component.state().todos.length).toBeGreaterThanOrEqual(1);
      })



    });

    describe('-->TodoList Group', () => {

      beforeEach(() => wrapper = component.find(ListGroup));

      it('--> contain ListGroup', () => expect(wrapper.name()).toEqual("ListGroup"));

      it('--> render', () => expect(findByTestAttr(wrapper.dive(), 'ListGroup_Component')).toEqual(true));

      it('--> pass todos', () => expect(wrapper.dive().instance().props.todos).toEqual(component.state().todos));

      it('-->pass working updateTodo', () => {
        let elementToBeUpdated = wrapper.dive().instance().props.todos[0];
        wrapper.props().updateTodo(elementToBeUpdated);
        expect(component.state().editableTodo).toEqual(elementToBeUpdated);
      })

      it("-->pass working remote", () => {
        let elementToBeDeleted = wrapper.dive().instance().props.todos[0];
        let currentTodosLength = component.state().todos.length;
        wrapper.props().removeTodo(elementToBeDeleted);
        expect(component.state().todos.length).toBe(--currentTodosLength);
      });

    });

    describe('TeamOmegaModelPopUp', () => {
      let editableTodo;

      beforeEach(() => {
        wrapper = component.find(TeamOmegaModelPopUp);
        editableTodo = component.state().editableTodo;
      });

      it('--> contain TeamOmegaModelPopUp', () => expect(wrapper.exists()).toEqual(true));



      // it('--> render', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaModelPopUp_Component').length).toBe(1));

      it('--> pass working editableTodos', () => {
        component.instance().addTodo(editableTodo)
        expect(editableTodo).toEqual(wrapper.dive().instance().props.editableTodo);
      });

      it('--> pass working update', () => {
        let text, updatedText;
        text = "Jai Ho";
        wrapper.props().isUpdate(editableTodo.id, text);
        updatedText = component.state().todos.find(item => item.id === editableTodo.id);
        expect(updatedText.text).toEqual(text);
      })

    });

  });

});



