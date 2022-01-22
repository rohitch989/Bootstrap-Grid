import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import TeamOmegaHeader from '../component/common/TeamOmegaHeader';
import TodoListApp from '../component/TodoList';
import { findByTestAttr } from './App.mock';

const setUp = shallow(<App />);

describe('App Component', () => {
  let component, wrapper;

  beforeAll(() => component = setUp);

  it("Should render without errors", () => {
    let wrapper = component.find(`[data-test='appComponent']`);
    expect(wrapper.length).toBe(1);
  });

  describe('Child Component', () => {

    describe('Header', () => {

      beforeEach(() => wrapper = component.find(TeamOmegaHeader));

      it('APP should contain Header', () => expect(wrapper.exists()).toEqual(true));

      it("Should render without Errors", () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaHeader_component')).toEqual(true));

      it('Should render the same type as passed', () => expect(wrapper.dive().type()).toEqual(wrapper.props().type));

      it('Should render the same text as passed', () => expect(wrapper.dive().text()).toEqual(wrapper.props().text));

    });

    describe('Main Component', () => {

      beforeEach(() => wrapper = component.find(TodoListApp));

      it('APP should contain TodoList', () => expect(wrapper.exists()).toEqual(true));

      it("Should render without Errors", () => expect(findByTestAttr(wrapper.dive(), 'TodoListApp_Component')).toEqual(true))

    });

  })

});




