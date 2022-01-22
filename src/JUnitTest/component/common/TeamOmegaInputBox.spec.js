import React from 'react';
import TeamOmegaInputBox from '../../../component/common/TeamOmegaInputBox';
import { shallow } from 'enzyme';
import { checkProps, event, findByTestAttr, mockFunc } from '../../App.mock'

const setUp = (props = {}) => shallow(<TeamOmegaInputBox {...props} />);


describe('TeamOmegaInputBox Component', () => {

  let component, wrapper, props;

  beforeAll(() => {
    props = {
      handlerChange: mockFunc,
      values: "",
      type: ""
    }
    component = setUp(props);
  })

  it('-->render', () => expect(findByTestAttr(component, 'TeamOmegaInputBox_Component')).toEqual(true));


  it("-->checking proptype", () => {
    const expectedProps = {
      handlerChange: () => { },
      values: "", type: "",
      ariaDescribedby: "", placeholder: "",
      className: "", ariaLabel: "",
      name: "", id: "",
      focus: true
    }
    const propsError = checkProps(TeamOmegaInputBox, expectedProps);
    expect(propsError).toBeUndefined();
  })

  describe('-->instance Method', () => {

    beforeEach(() => wrapper = component.instance());

    it("-->handleChange trigger the props handlerChange", () => {
      wrapper.handleChange(event);
      expect(mockFunc.calledOnce).toEqual(true);
      expect(mockFunc.calledWith(event.target.value)).toEqual(true);
      mockFunc.resetHistory()
    });

  });

  describe('-->Child Component', () => {

    describe('-->input html tag ', () => {

      beforeEach(() => wrapper = component.find("input"));

      it('-->contain a input', () => expect(wrapper.exists()).toEqual(true));


      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.values;
        let valuePassed = wrapper.props().value;
        expect(ComponentPropVal).toEqual(valuePassed);
      });

      it("-->handleChange should trigger the props handlerChange", () => {
        wrapper.simulate('change', event);
        expect(mockFunc.calledOnce).toEqual(true);
        expect(mockFunc.calledWith(event.target.value)).toEqual(true);
        mockFunc.resetHistory()
      });

    });

  });

});