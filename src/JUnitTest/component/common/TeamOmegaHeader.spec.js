import React from 'react';
import { shallow } from 'enzyme';

import TeamOmegaHeader from '../../../component/common/TeamOmegaHeader';
import { checkProps, findByTestAttr } from '../../App.mock';

const setUp = (props = {}) => shallow(<TeamOmegaHeader {...props} />);

describe('TeamOmegaHeader Component', () => {

  let component, wrapper, props, type, text;

  describe(`-->type h1`, () => {
    beforeEach(() => {
      text = "welcome";
      type = "h1"
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findByTestAttr(component, 'TeamOmegaHeader_component')).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });

  describe(`-->type h2`, () => {
    beforeEach(() => {
      text = "welcome";
      type = "h2";
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findByTestAttr(component, 'TeamOmegaHeader_component')).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });

  describe(`-->type h3`, () => {
    beforeEach(() => {
      text = "welcooome";
      type = "h3";
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findByTestAttr(component, 'TeamOmegaHeader_component')).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });

  describe(`-->type h4`, () => {
    beforeEach(() => {
      text = "WHynnn";
      type = "h4";
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findByTestAttr(component, 'TeamOmegaHeader_component')).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });

  describe(`-->type h5`, () => {
    beforeEach(() => {
      text = "grand Party";
      type = "h5";
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findByTestAttr(component, 'TeamOmegaHeader_component')).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });

  describe(`-->type h6`, () => {

    beforeEach(() => {
      text = "welcoe";
      type = "h6"
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findByTestAttr(component, 'TeamOmegaHeader_component')).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });

});