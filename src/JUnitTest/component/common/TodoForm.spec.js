import React from 'react';
import { shallow } from 'enzyme';

import TodoForm from '../../../component/common/TodoForm';
import { checkProps, mockFunc, findByTestAttr, event } from '../../App.mock'
import TeamOmegaInputBox from '../../../component/common/TeamOmegaInputBox';
import TeamOmegaButton from '../../../component/common/TeamOmegaButton';

const setUp = (props = {}) => shallow(<TodoForm {...props} />);


describe('Todofrom Component', () => {

  let component, wrapper, props;

  beforeEach(() => {
    props = { onSubmit: mockFunc }
    component = setUp(props);
  })

  it('-->render', () => expect(findByTestAttr(component, 'TodoForm_Component')).toEqual(true));


  it("-->checking proptype", () => {
    const expectedProps = {
      className: "container",
      id: "",
      onSubmit: () => { }
    }
    const propsError = checkProps(TodoForm, expectedProps);
    expect(propsError).toBeUndefined();
  })

  describe('-->instance Method', () => {

    beforeEach(() => wrapper = component.instance());

    it("-->handleChange update the state", () => {
      let value = "type";
      wrapper.handleChange(value);
      expect(component.state().input).toEqual(value);
    });

    it("-->handleSubmit pass the todo through props and reset the state", () => {
      wrapper.handleSubmit(event);
      expect(mockFunc.calledOnce).toEqual(true);
      mockFunc.resetHistory();
      expect(wrapper.state.input).toEqual("");
    });

  });

  describe('-->Child Component', () => {

    describe('-->input', () => {

      beforeEach(() => wrapper = component.find(TeamOmegaInputBox));

      it('-->contain a input', () => expect(wrapper.exists()).toEqual(true))


      it('-->render the input', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaInputBox_Component')).toEqual(true));

      it("-->pass the input through props", () => {
        let stateInput = component.state().input;
        let valuePassed = wrapper.props().values;
        expect(stateInput).toEqual(valuePassed);
      });

      it("-->handleChange props update state", () => {
        wrapper.dive().simulate('change', event);
        expect(component.state().input).toEqual(event.target.value);
      });

    });

    describe('--> TeamOmegaButton', () => {

      beforeEach(() => wrapper = component.find(TeamOmegaButton));

      it('-->contain  TeamOmegaButton', () => expect(wrapper.exists()).toEqual(true));


      it('--> render button', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaButton_Component')).toEqual(true));


      it('-->have type submit', () => expect(wrapper.props().type).toEqual("submit"))


      it("-->click should trigger submission and reset the state", () => {
        wrapper.dive().simulate('click', event);
        expect(mockFunc.calledOnce).toEqual(true);
        mockFunc.resetHistory()
        expect(component.state().input).toEqual("")
      })

    });



    describe('-->form', () => {
      beforeEach(() => wrapper = component.find('form'));

      it("-->form html tag", () => expect(wrapper.exists()).toEqual(true));


      it('-->submission should reset the state', () => {
        wrapper.simulate('submit', event);
        expect(mockFunc.calledOnce).toEqual(true);
        mockFunc.resetHistory()
        expect(component.state().input).toEqual("")
      })

    });

  });

});
