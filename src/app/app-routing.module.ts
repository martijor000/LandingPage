import { BodyComponentComponent } from "./body-component/body-component.component";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { ProductComponentComponent } from "./product-component/product-component.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // router imported from angular

// our list of routes
const routes: Routes = [
    { path: 'home', component: BodyComponentComponent },
    { path: '', component: BodyComponentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }