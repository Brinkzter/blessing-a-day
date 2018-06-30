import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { loginRouting, navigatableRoutes } from '~/login/login.routing';

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        loginRouting
    ],
    declarations: [
        navigatableRoutes
    ],
    providers: []
})
export class LoginModule {
}
