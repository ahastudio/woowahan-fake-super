import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DisplaySetDetailComponent } from './display-set-detail.component';

describe('Component: DisplaySetDetail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DisplaySetDetailComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DisplaySetDetailComponent],
      (component: DisplaySetDetailComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DisplaySetDetailComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DisplaySetDetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-display-set-detail></app-display-set-detail>
  `,
  directives: [DisplaySetDetailComponent]
})
class DisplaySetDetailComponentTestController {
}

