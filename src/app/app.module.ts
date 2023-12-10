import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeBaseExampleModule } from './components/subscribe/base-example/subscribe-base-example.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SubscribeBaseExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
