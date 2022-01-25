import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr } from '../../App.mock'
import TeamOmegaHeader from '../../../component/common/TeamOmegaHeader';

const setUp = (props = {}) => shallow(<TeamOmegaHeader {...props} />);


describe('TeamOmegaHeader Component', () => {

  let component, wrapper, props, type = "h1";

  beforeAll(() => {
    props = {
      type,
      text: "",
    }
    component = setUp(props);
  });

  it('-->render', () => expect(findByTestAttr(component, 'TeamOmegaHeader_component')).toEqual(true));


  it("-->checking proptype", () => {
    const expectedProps = {
      type,
      text: "",
      id: "", className: ""
    }
    const propsError = checkProps(TeamOmegaHeader, expectedProps);
    expect(propsError).toBeUndefined();
  })



  describe('-->Child Component', () => {

    describe(`${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true))


      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });

  });

});