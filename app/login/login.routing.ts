import { ModuleWithProviders } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { LoginMainComponent } from '~/login/login-main.component';
import { LoginStartComponent } from '~/login/login-start/login-start.component';
import { LoginCredentialsComponent } from '~/login/login-credentials/login-credentials.component';

const loginRoutes: Routes = [
    {
        path: '',
        component: LoginMainComponent,
        children: [
            {
                path: '',
                component: LoginStartComponent
            },
            {
                path: 'credentials',
                component: LoginCredentialsComponent
            }
        ]
    }
];

export const loginRouting: ModuleWithProviders = NativeScriptRouterModule.forChild(loginRoutes);

export const navigatableRoutes = [
    LoginStartComponent,
    LoginMainComponent,
    LoginCredentialsComponent
];
