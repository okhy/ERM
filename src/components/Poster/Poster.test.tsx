import * as React from "react";
import { shallow } from "enzyme";
import * as styles from "./Poster.styles.css";

import Poster from "./Poster";

describe("Poster component...", () => {
  it("... renders poster ", () => {
    const wrapper = shallow(<Poster url="testurlstring" />);
    expect(
      wrapper.find(`.${styles.main}`).prop("style").backgroundImage
    ).toEqual("url(testurlstring)");
  });

  it("... renders placeholder", () => {
    const wrapper = shallow(<Poster />);
    expect(wrapper.find(`.${styles.noPosterLabel}`)).toBeTruthy();
    expect(wrapper.find(`.${styles.noPosterLabel}`).text()).toEqual(
      "No poster"
    );
  });
});
