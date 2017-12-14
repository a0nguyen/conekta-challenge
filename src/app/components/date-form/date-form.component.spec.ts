import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { DateFormComponent } from "./date-form.component";
import { FormsModule } from "@angular/forms";

fdescribe("DateFormComponent", () => {
  let component: DateFormComponent;
  let fixture: ComponentFixture<DateFormComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DateFormComponent],
        imports: [FormsModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormComponent);
    component = fixture.componentInstance;
    component.dateToFilterBy = 1234567;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("when button is pushed", () => {
    it("should send an event", () => {
      spyOn(component.dateChanged, "emit");
      debugElement = fixture.debugElement.query(By.css("button"));
      element = debugElement.nativeElement;
      element.click()
      fixture.detectChanges();
      expect(component.dateChanged.emit).toHaveBeenCalledWith(1234567);
    });
  });
});
