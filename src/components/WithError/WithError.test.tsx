import * as React from "react";
import { shallow } from "enzyme";
// components
import WithError from "./WithError";

describe("WithError component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<WithError errorCallback={() => {}} />);

    expect(wrapper.state("hasError")).toEqual(false);
    expect(wrapper.find(WithError)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<WithError errorCallback={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("... renders children", () => {
    const TestComponent = () => <span>Test</span>;
    const wrapper = shallow(
      <WithError errorCallback={() => {}}>
        <TestComponent />
      </WithError>
    );

    expect(wrapper.find(TestComponent)).toBeTruthy();
  });
  // error related tests
  describe("... handles errors by ...", () => {
    it("... calling componentDidCatch", () => {
      const TestComponent = () => <span>Test</span>;
      const wrapper = shallow(
        <WithError errorCallback={() => {}}>
          <TestComponent />
        </WithError>
      );

      // wrapping method as jest function for spying on
      const componentDidCatch = wrapper.instance().componentDidCatch;
      wrapper.instance().componentDidCatch = jest.fn(componentDidCatch);
      wrapper.simulateError(new Error());

      expect(wrapper.instance().componentDidCatch).toHaveBeenCalled();
    });
    it("... returning correct state using getDerivedStateFromError", () => {
      const result = WithError.getDerivedStateFromError();
      expect(result.hasError).toBe(true);
    });
    it("... rendering error message", () => {
      const TestComponent = () => <span>Test</span>;
      const wrapper = shallow(
        <WithError errorCallback={() => {}}>
          <TestComponent />
        </WithError>
      );

      wrapper.setState({ hasError: true });

      expect(wrapper.state("hasError")).toEqual(true);
      expect(wrapper.contains(<span>Something went wrong</span>)).toBeTruthy();
    });
  });
});
