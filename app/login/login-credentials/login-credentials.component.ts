import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { handleIPhoneX } from '~/utils/status-bar-utils';

@Component({
    selector: 'bad-login-credentials',
    templateUrl: './login/login-credentials/login-credentials.component.html'
})

export class LoginCredentialsComponent implements OnInit {
    constructor(private page: Page) {
    }

    public ngOnInit() {
        this.page.className = 'login-main';
        this.page.actionBar.className = 'login-actionbar';
        this.page.actionBar.backgroundColor = '#FFF';
        handleIPhoneX(this.page);
    }
}