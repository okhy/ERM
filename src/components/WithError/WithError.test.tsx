import * as React from "react";
import { shallow } from "enzyme";
// components
import WithError from "./WithError";

describe("WithError component...", () => {
  it("...renders without errors", () => {
    const wrapper = shallow(<WithError />);

    expect(wrapper.state("hasError")).toBeFalsy();
    expect(wrapper.find(WithError)).toBeTruthy();
    // snapshot
    expect(wrapper).toMatchSnapshot();
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
  describe("... handles errors by ...", () => {
    it("... calling componentDidCatch", () => {
      const TestComponent = () => <span>Test</span>;
      const wrapper = shallow(
        <WithError>
          <TestComponent />
        </WithError>
      );

      // mocking as jest function
      wrapper.instance().componentDidCatch = jest.fn();
      wrapper.simulateError(new Error());

      expect(wrapper.instance().componentDidCatch).toHaveBeenCalled();
    });
    it("... returning correct state by getDerivedStateFromError", () => {
      const result = WithError.getDerivedStateFromError();
      expect(result.hasError).toBe(true);
    });
  });
});
