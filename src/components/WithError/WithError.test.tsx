import * as React from "react";
import { shallow } from "enzyme";
// components
import WithError from "./WithError";

describe("WithError component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<WithError />);

    expect(wrapper.find(WithError)).toBeTruthy();
  });
  it("...renders children", () => {
    const TestComponent = () => <span>Test</span>;
    const wrapper = shallow(
      <WithError>
        <TestComponent />
      </WithError>
    );

    expect(wrapper.find(TestComponent)).toBeTruthy();
  });
  it("...renders an error", () => {
    const TestComponent = () => <span>Test</span>;

    const wrapper = shallow(
      <WithError>
        <TestComponent />
      </WithError>
    );
    wrapper.simulateError(new Error("test error"));

    expect(wrapper.find(<span>Something went wrong</span>)).toBeTruthy();
  });
});
