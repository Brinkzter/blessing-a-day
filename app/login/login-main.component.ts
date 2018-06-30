import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { handleIPhoneX } from '~/utils/status-bar-utils';

@Component({
    selector: 'bad-login-main',
    templateUrl: './login/login-main.component.html'
})

export class LoginMainComponent implements OnInit {
    constructor(private page: Page) {

    }

    public ngOnInit() {
        this.page.className = 'login-main';
        this.page.actionBarHidden = true;
        handleIPhoneX(this.page);
    }
}