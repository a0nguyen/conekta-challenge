import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { TableComponent } from "./table.component";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

class TestElement {
  payload: any = {
    id: 0,
    rate: 0,
    amount: 0,
    value: 0,
    date: 0,
    init: function(id, rate, amount, value, date) {
      this.id = id;
      this.rate = rate;
      this.amount = amount;
      this.value = value;
      this.date = date;
    },
    val: function() {
      return {
        i: this.id,
        r: this.rate,
        a: this.rate,
        v: this.value,
        d: this.date
      };
    }
  };
}

fdescribe("TableComponent", () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TableComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    var testElement1 = new TestElement();
    testElement1.payload.init(1, 123, 1234, 12345, 1);
    var testElement2 = new TestElement();
    testElement2.payload.init(2, 231, 2341, 23451, 2);
    component.timestamp = 0;
    component.elementsToDisplay = Observable.of([testElement1, testElement2]);
    fixture.detectChanges();
  });
  describe("when date is not set", () => {
    beforeEach(() => {
      component.timestamp = 0;
      fixture.detectChanges();
    });

    it("should create", () => {
      expect(component).toBeTruthy();
    });

    it("should display the rate amount and value of each element", () => {
      debugElement = fixture.debugElement.query(By.css(".jas-id1"));
      element = debugElement.nativeElement;
      expect(element.textContent).toBe("1");

      debugElement = fixture.debugElement.query(By.css(".jas-id2"));
      element = debugElement.nativeElement;
      expect(element.textContent).toBe("2");
    });
  });

  describe("when date is set", () => {
    beforeEach(() => {
      component.timestamp = 1;
      fixture.detectChanges();
    });

    it("should display the rate amount and value of each element whose date is < timestamp", () => {
      debugElement = fixture.debugElement.query(By.css(".jas-id1"));
      expect(debugElement).toBe(null);

      debugElement = fixture.debugElement.query(By.css(".jas-id2"));
      element = debugElement.nativeElement;
      expect(element.textContent).toBe("2");
    });
  });
});
