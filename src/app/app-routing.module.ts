import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './common/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'client', pathMatch: 'full'},
  {
    path: 'order',
    loadChildren: () => import('./order/order.module')
      .then(m => m.OrderModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module')
      .then(m => m.ClientModule)
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
