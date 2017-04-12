import {Component, Inject} from '@angular/core';
// import {MailService} from "./mail.service";

@Component({
    selector: 'app-root',
    // templateUrl: './app.component.html',
    template: `
<div>
<ul>
    <app-simple-form 
        *ngFor="let message of mail.messages"
        [myMessage222]="message">
    </app-simple-form>
</ul>
</div>
`
    // styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        @Inject('mail') private mail,
    ) {}
}
