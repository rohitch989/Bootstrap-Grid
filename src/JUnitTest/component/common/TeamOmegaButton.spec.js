import React from 'react';
import { shallow } from 'enzyme';

import TeamOmegaButton from '../../../component/common/TeamOmegaButton';
import { checkProps, mockFunc } from '../../App.mock'

const setUp = (props = {}) => shallow(<TeamOmegaButton {...props} />);


describe('TeamOmegaButton Component', () => {


  let component, wrapper, props, type = "button";

  beforeAll(() => {
    props = {
      type,
      text: "",
      click: mockFunc
    }
    component = setUp(props);
  });

  it('-->render', () => expect(component.find(`[data-test="TeamOmegaButton_Component"]`).exists()).toEqual(true));

  it("-->checking proptype", () => {
    const expectedProps = {
      type, dataBsToggle: "",
      dataBsTarget: "",
      dataBsDismiss: "",
      ariaLabel: "",
      className: "",
      id: "",
      click: () => { }
    }
    const propsError = checkProps(TeamOmegaButton, expectedProps);
    expect(propsError).toBeUndefined();
  })



  describe('-->Child Component', () => {

    describe(`${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} `, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

      it('--> trigger props on click event', () => {
        wrapper.simulate('click');
        expect(mockFunc.calledOnce).toEqual(true)
        mockFunc.resetHistory()
      });

    });


  });



});