import { AppPage } from "./app.po"
import { browser, element, by } from "protractor"

describe("As a user, when I visit the landing page", () => {
  it("should display a header", () => {
    browser.get("/")
    expect(element(by.css("app-header")).isPresent()).toBeTruthy()
  })

  describe("As a user, when I click orders", () => {
    browser.ignoreSynchronization = true//protractor doesn't work well with sockets
    it("should display the order page ", () => {
      browser.get("/")
      element(by.css(".e2e-order")).click()
      browser.sleep(2000)
      expect(element(by.css("app-order-page")).isPresent()).toBeTruthy()
    })
  })

  describe("As a user, when I click trade", () => {
    it("should display the trade page", () => {
      browser.get("/")
      element(by.css(".e2e-trade")).click()
      expect(element(by.css("app-book-page")).isPresent()).toBeTruthy()
    })
  })
})

describe("As a user, when I visit the order page", () => {
  browser.ignoreSynchronization = true      
  it("should display a table with last orders", () => {
    browser.get("/orders")
    browser.sleep(2000)        
    expect(element(by.css("app-table")).isPresent()).toBeTruthy()
    expect(element(by.css("app-table .jas-id72022"))).toBeTruthy()    
  })
  // describe("when I set the date", () => {
  //   it("should display the orders matching with the date", () => {
  //     browser.get("/orders")
  //     browser.sleep(2000)        
  //     element(by.css("app-table")).sendKeys("1513212209200")
  //     expect(element(by.css("app-table")).isPresent()).toBeTruthy()
  //     expect(element(by.css("app-table .jas-id720344"))).toBeTruthy()    
  //   })
  // })
})

describe("As a user, when I visit the trade page", () => {
  browser.ignoreSynchronization = true      
  it("should display a table with trade orders", () => {
    browser.get("/trades")
    browser.sleep(2000)        
    expect(element(by.css("app-table")).isPresent()).toBeTruthy()
    expect(element(by.css("app-table .jas-id72022"))).toBeTruthy()
  })
  // describe("when I set the date", () => {
  //   it("should display the orders matching with the date", () => {
  //     browser.get("/orders")
  //     browser.sleep(2000)        
  //     element(by.css("app-table")).sendKeys("1513212209200")
  //     expect(element(by.css("app-table")).isPresent()).toBeTruthy()
  //     expect(element(by.css("app-table .jas-id0")).getText()).toBe("720344")    
  //   })
  // })
})