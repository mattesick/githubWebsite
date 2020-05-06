import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, HttpClientTestingModule]
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
    // component.ngOnInit();
    // fixture.detectChanges();
    // const compiled = fixture.nativeElement;
    // const drop = compiled.querySelector("#drop");
    // expect(drop.style.display).toBe("none");
    // component.dropDown();
    // expect(drop.style.display).toBe("flex");
    // const btn = compiled.querySelector("#text");
    // const drop = compiled.querySelector("#drop");
    // expect(drop.style.display).toBe("none");
    // spyOn(component, "dropDown");
    // btn.click();
    // expect(component.dropDown).toHaveBeenCalled();
  });
  fit("dropdown is dropable", ()=> {
    component.ngOnInit();
    fixture.detectChanges();
    // const compiled = fixture.nativeElement;
    // const drop = compiled.querySelector("#drop");
    // expect(drop.style.display).toBe("none");
  });
});
