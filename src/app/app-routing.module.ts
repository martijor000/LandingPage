import { BodyComponentComponent } from "./main/body-component/body-component.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // router imported from angular
import { ProductPageComponent } from "./product-page/product-page.component";

// our list of routes
const routes: Routes = [
    { path: 'Products', component: ProductPageComponent },
    { path: 'Home', component: BodyComponentComponent },
    { path: '', component: BodyComponentComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }