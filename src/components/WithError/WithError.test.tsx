import * as React from "react";
import { shallow } from "enzyme";
// components
import WithError from "./WithError";

const TestComponent = () => <span>Test</span>;

describe("WithError component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<WithError errorCallback={jest.fn()} />);

    expect(wrapper.state("hasError")).toEqual(false);
    expect(wrapper.find(WithError)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<WithError errorCallback={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders children", () => {
    const wrapper = shallow(
      <WithError errorCallback={jest.fn()}>
        <TestComponent />
      </WithError>
    );
    expect(wrapper.find(TestComponent)).toBeTruthy();
  });
  // error related tests
  describe("... handles errors by ...", () => {
    it("... calling error handling functions", () => {
      const mockErrorCallback = jest.fn();
      const wrapper = shallow(
        <WithError errorCallback={mockErrorCallback}>
          <TestComponent />
        </WithError>
      );

      // wrapping method as jest function for spying on
      wrapper.instance().componentDidCatch = jest.fn(
        wrapper.instance().componentDidCatch
      );
      wrapper.simulateError(new Error());

      expect(wrapper.instance().componentDidCatch).toHaveBeenCalled();
      expect(mockErrorCallback).toHaveBeenCalled();
    });

    it("... returning correct state using getDerivedStateFromError", () => {
      const result = WithError.getDerivedStateFromError();
      expect(result.hasError).toBe(true);
    });

    it("... rendering error message", () => {
      const wrapper = shallow(
        <WithError errorCallback={jest.fn()}>
          <TestComponent />
        </WithError>
      );

      wrapper.simulateError(new Error());

      expect(wrapper.state("hasError")).toEqual(true);
      expect(wrapper.contains(<span>Something went wrong</span>)).toBeTruthy();
    });
  });
});
