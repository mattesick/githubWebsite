import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit("upcoming events should be clickable", ()=> {
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const btn = compiled.querySelector("#text");
    spyOn(component, "dropDown");
    btn.click();
    expect(component.dropDown).toHaveBeenCalled();
  });
  it("dropdown is dropable", ()=> {
    component.ngOnInit();
    fixture.detectChanges();
    // const compiled = fixture.nativeElement;
    // const drop = compiled.querySelector("#drop");
    // expect(drop.style.display).toBe("none");
  });
});
