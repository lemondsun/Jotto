import React from "react";
import Input from "./Input"
import { shallow } from 'enzyme'
import { findByTestAttr } from '../test/testUtils'

/**
 * Setup function for Input component.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />)
}

it("Input renders without error", () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-input')
  expect(component.length).toBe(1)
 })