import {Component} from '@angular/core';
import './app.component.css';

@Component({
    selector: '#angular-root',
    template: `<div><h2 class="angular-title">{{title}}</h2><button>Click me!</button></div>`,
})
export class AppComponent {
    public title = 'Hello from angular';
}
