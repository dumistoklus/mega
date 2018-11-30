import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './angular/app.module';
import { environment } from './angular/environments/environment';

if (environment.production) {
    enableProdMode();
}

export function initAngular() {
    platformBrowserDynamic().bootstrapModule(AppModule);
}
