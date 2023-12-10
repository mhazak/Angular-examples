import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseExampleComponent } from './components/subscribe/base-example/base-example.component';

export enum RoutingPages {
  SUBSCRIBE = 'subscribe',
}

const routes: Routes = [
  {
    path: 'subscribe',
    loadChildren: () =>
      import(
        './components/subscribe/base-example/subscribe-base-example.module'
      ).then((m) => m.SubscribeBaseExampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
