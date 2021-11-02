import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { BodyComponentComponent } from './body-component/body-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProductComponentComponent,
    BodyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
