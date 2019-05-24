import { templateMiddleware } from "./server";

describe("Express template middleware...", () => {
  it("... calls response with passed html", () => {
    const mockHtml = "<span>test html string</span>";
    const mockResponse = { send: jest.fn() };

    templateMiddleware(mockHtml)(jest.fn(), mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith(mockHtml);
  });
});
