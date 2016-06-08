import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ROUTER_DIRECTIVES, OnActivate, RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-display-set-detail',
  templateUrl: 'display-set-detail.component.html',
  styleUrls: ['display-set-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class DisplaySetDetailComponent implements OnActivate {

  private displaySet: any = {};

  constructor(private http: Http) {}

  routerOnActivate(segment: RouteSegment) {
    let id = segment.getParam('id');
    let url = 'http://2up-fake-api.dev/admin/display_sets/' + id + '.json';
    this.http.get(url)
      .toPromise()
      .then(res => this.displaySet = res.json().result.displaySet)
      .catch(() => alert('Error'));
  }

  save() {
    let id = this.displaySet.id;
    let url = 'http://2up-fake-api.dev/admin/display_sets/' + id + '.json';
    let data = { displaySet: this.displaySet };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.put(url, JSON.stringify(data), { headers: headers })
      .toPromise()
      .then(() => alert('저장 완료'))
      .catch(() => alert('Error'));
  }

}
