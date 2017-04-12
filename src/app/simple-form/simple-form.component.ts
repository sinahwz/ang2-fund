import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
    selector: 'app-simple-form',
    template: `
    <div>
    {{myMessage222}} <br>
    <input type="text" #myInput [(ngModel)]="myMessage222">
    <button type="button" (click)="onClick($event.type, myInput.value)">Click me!</button>
    <hr>
</div>
  `,
    styles: []
})
export class SimpleFormComponent implements OnInit {

    @Input() myMessage222;

    onClick(event, value) {
        console.log('Event -> ', event);
        console.log('Entered -> ', value);
    }

    constructor() {
        // setInterval(() => this.myMessage222 = Math.random().toString(), 3000);
    }

    ngOnInit() {
    }

}
