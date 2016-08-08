import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [appRouterProviders])
    .then(success => console.log('Bootstrap success'))
    .catch(error => console.log(error));
