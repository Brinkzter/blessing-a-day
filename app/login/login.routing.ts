import { ModuleWithProviders } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { LoginMainComponent } from '~/login/login-main.component';

const loginRoutes: Routes = [
    {
        path: '',
        component: LoginMainComponent
    }
];

export const loginRouting: ModuleWithProviders = NativeScriptRouterModule.forChild(loginRoutes);