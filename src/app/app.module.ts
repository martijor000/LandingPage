import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProductComponentComponent,
    BodyComponentComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
