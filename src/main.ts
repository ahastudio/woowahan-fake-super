import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FakeSuperAppComponent, environment } from './app/';

import 'rxjs/add/operator/toPromise';

if (environment.production) {
  enableProdMode();
}

bootstrap(FakeSuperAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
