import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '@environments/environment';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy',
    preloadingStrategy: PreloadAllModules,
    enableTracing: environment.production ? false : true // debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
