import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { LoginMainComponent } from '~/login/login-main.component';
import { loginRouting } from '~/login/login.routing';

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        loginRouting
    ],
    declarations: [
        LoginMainComponent
    ],
    providers: []
})
export class LoginModule {
}
