import { AppPage } from "./app.po"
import { browser, element, by } from "protractor"

describe("As a user, when I visit the landing page", () => {
  it("should display a header", () => {
    browser.get("/")
    expect(element(by.css("app-header")).isPresent()).toBeTruthy()
  })

  describe("As a user, when I click orders", () => {
    it("should display the order page after api call", () => {
      browser.get("/")
      element(by.css(".e2e-order")).click()
      expect(element(by.css("app-order-page")).isPresent()).toBeTruthy()
    })
  })

  describe("As a user, when I click orders", () => {
    it("should display the trade page", () => {
      browser.get("/")
      element(by.css(".e2e-trade")).click()
      expect(element(by.css("app-book-page")).isPresent()).toBeTruthy()
    })
  })
})

describe("As a user, when I visit the order page", () => {
  it("should display a table with last order", () => {
    browser.get("/")
    expect(element(by.css("app-table")).isPresent()).toBeTruthy()
  })
})