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
import { DisplaySetsListComponent } from './display-sets-list.component';

describe('Component: DisplaySetsList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DisplaySetsListComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DisplaySetsListComponent],
      (component: DisplaySetsListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DisplaySetsListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DisplaySetsListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-display-sets-list></app-display-sets-list>
  `,
  directives: [DisplaySetsListComponent]
})
class DisplaySetsListComponentTestController {
}

