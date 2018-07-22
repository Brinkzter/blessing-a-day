import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { handleIPhoneX } from '~/utils/status-bar-utils';
import { isIOS } from 'tns-core-modules/platform';
import { topmost } from 'tns-core-modules/ui/frame';
import { Color } from 'tns-core-modules/color';

@Component({
    selector: 'bad-login-credentials',
    templateUrl: './login/login-credentials/login-credentials.component.html'
})

export class LoginCredentialsComponent implements OnInit {
    constructor(private page: Page) {
    }

    public ngOnInit() {
        this.page.className = 'login-main';
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.actionBar.className = 'login-actionbar';
        this.page.actionBar.backgroundColor = '#FFF';
        handleIPhoneX(this.page);
        if (isIOS) {
            let red = new Color("#ff0000");
            let navigationBar = topmost().ios.controller.navigationBar;
            console.log(navigationBar);
            navigationBar.translucent = true;
            navigationBar.backgroundColor = red.ios;
        }
    }
}