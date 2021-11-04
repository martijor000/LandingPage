import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './main/header-component/header-component.component';
import { ProductComponentComponent } from './main/product-component/product-component.component';
import { BodyComponentComponent } from './main/body-component/body-component.component';
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
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
