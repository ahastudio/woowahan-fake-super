import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { DisplaySetsListComponent } from './display-sets-list';
import { DisplaySetDetailComponent } from './display-set-detail';

@Component({
  moduleId: module.id,
  selector: 'fake-super-app',
  templateUrl: 'fake-super.component.html',
  styleUrls: ['fake-super.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: DisplaySetsListComponent },
  { path: '/displaySets/:id', component: DisplaySetDetailComponent }
])
export class FakeSuperAppComponent {
  title = 'fake-super works!';

  constructor(private router: Router) {
  }
}
