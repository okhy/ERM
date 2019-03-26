import * as React from "react";
import * as puppeteer from "puppeteer";
import { shallow } from "enzyme";
const path = require("path");

// components
import SearchPage from "./SearchPage";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";

describe("SearchPage component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(<SearchPage />);

    expect(wrapper.find(SearchPage)).toBeTruthy();
    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper.find(Footer)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();
  });

  // INTERGRATION TESTS
  describe("... passes integration e2e tests ...", () => {
    it("... accepts input", async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(path.resolve(__dirname, "./../../../dist/index.html"));
      await page.type("input", "test movie title");
      await page.click("button");
      const text = await page.$eval("input", el => el.getAttribute("value"));

      expect(text).toBe("test movie title");
    });
  });
});
