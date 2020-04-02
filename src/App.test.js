import React from "react";
import App from "./App";
import { shallow } from 'enzyme'
import { findByTestAttr } from '../test/testUtils'

/**
 * Setup function for app component.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />)
}

it("App renders without error", () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
 })


