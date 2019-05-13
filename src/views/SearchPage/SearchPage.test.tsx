import * as React from "react";
import * as puppeteer from "puppeteer";
import { shallow } from "enzyme";
// components
import { SearchPage } from "./SearchPage";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";

const mockedMovieIDList: number[] = [1, 2, 3, 4];
const mockLocation = { search: "?param=value" };

describe("SearchPage component...", () => {
  it("... renders without errors", () => {
    const wrapper = shallow(
      <SearchPage location={mockLocation} movieIDList={mockedMovieIDList} />
    );

    expect(wrapper.find(SearchPage)).toBeTruthy();
    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper.find(Footer)).toBeTruthy();
  });
  it("... matches snapshot", () => {
    const wrapper = shallow(
      <SearchPage location={mockLocation} movieIDList={mockedMovieIDList} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it.todo("todo: location test");
  describe("... passes integration e2e tests ...", () => {
    it("... accepts input", async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto("http://localhost:8080");
      await page.type("input", "test movie title");
      await page.click("button");
      const text = await page.$eval("input", el => el.getAttribute("value"));

      expect(text).toBe("test movie title");
    }, 10000);
  });
});
