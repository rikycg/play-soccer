import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsoSectionComponent } from './pso-section.component';

describe('PsoSectionComponent', () => {
  let component: PsoSectionComponent;
  let fixture: ComponentFixture<PsoSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PsoSectionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('list should be an array', () => {
    const spy = spyOnProperty(component, 'list').and.callThrough();
    expect(component.list).toBeInstanceOf(Array);
    expect(spy).toHaveBeenCalled();
  });

});
