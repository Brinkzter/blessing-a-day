import { ModuleWithProviders, NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginMainComponent } from '~/login/login-main.component';

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: 'login',
        component: LoginMainComponent
    }
];

export const appRouting: ModuleWithProviders = NativeScriptRouterModule.forRoot(appRoutes);