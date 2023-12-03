import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseExampleComponent } from './components/subscribe/base-example/base-example.component';

const routes: Routes = [
  {
    path: 'subscribe',
    children: [
      {
        path: 'base-example',
        component: BaseExampleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
