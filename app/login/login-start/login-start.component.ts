import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { handleIPhoneX } from '~/utils/status-bar-utils';

@Component({
    selector: 'bad-login-start',
    templateUrl: './login/login-start/login-start.component.html'
})

export class LoginStartComponent implements OnInit {
    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }

    public ngOnInit() {
        this.page.className = 'login-main';
        this.page.actionBarHidden = true;
        handleIPhoneX(this.page);
    }

    public onTap(event) {
        console.log(event);
    }
}