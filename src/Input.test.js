import React from "react";
import Input from "./Input";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";

/**
 * Setup function for Input component.
 * @returns {ShallowWrapper}
 */
const setup = (secertWord = "party") => {
  return shallow(<Input secertWord={secertWord} />);
};

it("Input renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

it("does not throw warning with expected props", () => {
  checkProps(Input, { secertWord: "party" });
});

// describe("state controlled input field", () => {
//   it("state updates with value of input box upon change", () => {
//     const mockSetCurrentGuess = jest.fn();
//     React.useState = jest.fn(() => ["", mockSetCurrentGuess()]);
//     // the next two lines define a shallowWrapper for use.
//     const wrapper = setup();
//     const inputBox = findByTestAttr(wrapper, "input-box");
//     // the next two lines simulate input-box getting a value of train.
//     const mockEvent = { target: { value: "train" } };
//     inputBox.simulate("change", mockEvent);

//     expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
//   });
// });
