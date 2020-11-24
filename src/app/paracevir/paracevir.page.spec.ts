import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParacevirPage } from './paracevir.page';

describe('ParacevirPage', () => {
  let component: ParacevirPage;
  let fixture: ComponentFixture<ParacevirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParacevirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParacevirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
