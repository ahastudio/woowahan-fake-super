import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ROUTER_DIRECTIVES, OnActivate } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'display-sets-list',
  templateUrl: 'display-sets-list.component.html',
  styleUrls: ['display-sets-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class DisplaySetsListComponent implements OnActivate {

  private displaySets = [];

  constructor(private http: Http) {}

  routerOnActivate() {
    let url = 'http://2up-fake-api.dev/admin/display_sets.json';
    this.http.get(url)
      .toPromise()
      .then(res => this.displaySets = res.json().result.displaySets)
      .catch(() => alert('Error'));
  }

}
