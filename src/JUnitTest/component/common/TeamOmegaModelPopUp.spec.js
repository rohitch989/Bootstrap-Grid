import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, mockFunc, event } from '../../App.mock'
import TeamOmegaModelPopUp from '../../../component/common/TeamOmegaModelPopUp';
import TeamOmegaInputBox from '../../../component/common/TeamOmegaInputBox';
import TeamOmegaButton from '../../../component/common/TeamOmegaButton';

const setUp = (props = {}) => shallow(<TeamOmegaModelPopUp {...props} />);



describe('TeamOmegaModelPopUp Component', () => {
  let editableTodo = { id: 323, text: "hello" }
  let component, wrapper, props;

  beforeEach(() => {
    props = { editableTodo, isUpdate: mockFunc }
    component = setUp(props);
  });

  it('-->render', () => {
    expect(findByTestAttr(component, 'TeamOmegaModelPopUp_Component')).toEqual(true);
  });

  it("-->checking proptype", () => {
    const expectedProps = { editableTodo, isUpdate: () => { } }
    const propsError = checkProps(TeamOmegaModelPopUp, expectedProps);
    expect(propsError).toBeUndefined();
  });

  describe('-->instance Method', () => {

    beforeEach(() => {
      wrapper = component.instance();
    });

    it("-->handleChange update the state", () => {
      let value = "type";
      wrapper.handleChange(value);
      expect(component.state().input).toEqual(value);
    });

    it("-->handleSubmit trigger props isUpdate with a todo with new text and reset the state", () => {
      let text = wrapper.state.input;
      wrapper.handleSubmit(event);
      expect(mockFunc.calledOnce).toEqual(true);
      expect(mockFunc.calledWith(editableTodo.id, text)).toEqual(true);
      mockFunc.resetHistory()
      expect(wrapper.state.input).toEqual("");
    });

    it('-->componentDid update the state when props change', () => {
      let prevProp = wrapper.props;
      editableTodo = { id: 323, text: "welcome" };
      component = setUp({ editableTodo });
      component.instance().componentDidUpdate(prevProp);
      expect(component.state().input).toEqual(editableTodo.text)
    });

  });

  describe('-->Child Component', () => {

    describe('-->input', () => {

      beforeEach(() => {
        wrapper = component.find(TeamOmegaInputBox);
      });

      it('-->contain a input', () => expect(wrapper.exists()).toEqual(true));

      it('-->render the input', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaInputBox_Component')).toEqual(true));

      it("-->pass the input through props", () => {
        let stateInput = component.state().input;
        let valuePassed = wrapper.props().values;
        expect(stateInput).toEqual(valuePassed);
      });

      it("-->handleChange props update state", () => {
        let value = "gvdghs";
        wrapper.props().handlerChange(value);
        expect(component.state().input).toEqual(value);
      });

    });

    describe('--> button', () => {

      beforeEach(() => wrapper = component.find(TeamOmegaButton));

      it('-->contain  button', () => expect(wrapper.exists()).toEqual(true));

      describe('--> Model-Cross Button', () => {

        beforeEach(() => wrapper = wrapper.filter(`[ariaLabel="Model-Cross"]`));

        it('--contain Model-Cross Button', () => expect(wrapper.length).toBe(1));

        it('-->render Model-Cross button', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaButton_Component')).toEqual(true));

        it('-->dismiss the model through bootstrap attribute', () => expect(wrapper.find(`[dataBsDismiss="modal"]`).exists()).toEqual(true))
      });

      describe('-->input', () => {

        beforeEach(() => wrapper = component.find(TeamOmegaInputBox))

        it("-->contain TeamOmegaInputBox", () => expect(wrapper.exists()).toEqual(true));

        it('-->typing update the state', () => {
          wrapper.dive().simulate('change', event);
          expect(component.state().input).toEqual(event.target.value);
        });

      });

      describe('--> Save Button', () => {

        beforeEach(() => wrapper = wrapper.filter(`[ariaLabel="Save"]`));

        it('--contain Save Button', () => expect(wrapper.length).toBe(1));

        it('-->render Save button', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaButton_Component')).toEqual(true));

        it('-->dismiss the model through bootstrap attribute', () => expect(wrapper.find(`[dataBsDismiss="modal"]`).exists()).toEqual(true))


        it("-->submission should  work", () => {
          let text = component.state().input;
          wrapper.dive().simulate('click');
          text = component.state().input;
          expect(mockFunc.calledOnce).toEqual(true);
          expect(mockFunc.calledWith(editableTodo.id, text)).toEqual(true);
          mockFunc.resetHistory()
          expect(text).toEqual("");
        })

      });

      describe('-->Close Button', () => {

        beforeEach(() => wrapper = wrapper.filter(`[ariaLabel="Close"]`));

        it('--contain Close Button', () => expect(wrapper.length).toBe(1));

        it('-->render Close button', () => expect(findByTestAttr(wrapper.dive(), 'TeamOmegaButton_Component')).toEqual(true));

        it('-->dismiss the model through bootstrap attribute', () => expect(wrapper.find(`[dataBsDismiss="modal"]`).exists()).toEqual(true));

      });

    });

  });

});
