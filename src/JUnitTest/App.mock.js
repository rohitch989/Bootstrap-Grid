import checkPropTypes from "check-prop-types";
import Sinon from 'sinon';

export const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`).exists();

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export let mockFunc = Sinon.spy();

export const event = {
  target: { value: "hello" },
  preventDefault: () => { }
}