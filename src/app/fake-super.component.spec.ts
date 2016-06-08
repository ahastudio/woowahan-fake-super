import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FakeSuperAppComponent } from '../app/fake-super.component';

beforeEachProviders(() => [FakeSuperAppComponent]);

describe('App: FakeSuper', () => {
  it('should create the app',
      inject([FakeSuperAppComponent], (app: FakeSuperAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fake-super works!\'',
      inject([FakeSuperAppComponent], (app: FakeSuperAppComponent) => {
    expect(app.title).toEqual('fake-super works!');
  }));
});
