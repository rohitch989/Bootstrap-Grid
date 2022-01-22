import React from 'react';
import { shallow } from 'enzyme';

import ListGroup from '../../component/ListGroup';
import { checkProps, findByTestAttr } from '../App.mock';
import TeamOmegaButton from '../../component/common/TeamOmegaButton';

const setUp = (props = {}) => shallow(<ListGroup {...props} />);

let todos = [{
  id: Math.floor(Math.random() * 10000),
  text: "Hello"
}];

let removeTodo = (rtodo) => {
  const removeArr = todos.filter(todo => todo.id !== rtodo.id);
  todos = [...removeArr];
}

let updateTodo = (todo) => todo;


describe('ListGroup Component', () => {
  let component, wrapper, props;

  beforeEach(() => {
    props = { todos, removeTodo, updateTodo }
    component = setUp(props);
  });

  it('--> render', () => expect(findByTestAttr(component, 'ListGroup_Component')).toEqual(true))


  it('-->checking props', () => {
    let expectedProps = { todos, removeTodo, updateTodo }
    let propsError = checkProps(ListGroup, expectedProps);
    expect(propsError).toBeUndefined();
  });


  describe('--> Child Component', () => {

    beforeEach(() => wrapper = component.find(TeamOmegaButton))

    it('-->contains a button', () => expect(wrapper.exists()).toEqual(true))

    describe('--> Edit Button', () => {

      beforeEach(() => wrapper = wrapper.filter(`[ariaLabel="Edit"]`));

      it('--contain Edit Button', () => expect(wrapper.length).toBe(1));

      it('-->render Edit button', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaButton_Component')).toEqual(true));

      it('--> pass correct todo to parrent element', () => {
        let passedTodo = wrapper.props().click(todos[0]);
        expect(passedTodo).toEqual(todos[0]);
      });

    });

    describe('--> Delete Button', () => {

      beforeEach(() => wrapper = wrapper.filter(`[ariaLabel="Delete"]`));


      it('--> contain a delete button', () => expect(wrapper.length).toBe(1));


      it('-->render delete button', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaButton_Component')).toEqual(true));

      it('--> should delete a todo', () => {
        let { length } = component.instance().props.todos;
        wrapper.props().click(todos[0]);
        component = setUp({ todos, removeTodo });
        expect(component.instance().props.todos.length).toBe(--length)
      });

    });

  });

})