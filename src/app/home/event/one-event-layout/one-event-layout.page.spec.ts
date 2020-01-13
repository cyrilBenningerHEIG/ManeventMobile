import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneEventLayoutPage } from './one-event-layout.page';

describe('OneEventLayoutPage', () => {
  let component: OneEventLayoutPage;
  let fixture: ComponentFixture<OneEventLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneEventLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneEventLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
