import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';
import { HeroAppMainComponent } from './hero-app-main.component';

@Component({
    selector: 'hero-app',
    template: `
    <h1>Tour of Heroes</h1>
    <hero-app-main [hero]=hero></hero-app-main>`,
    styles: ['h1 { font-weight: normal; }'],
    directives: [HeroAppMainComponent]
})
export class HeroAppComponent {
    hero = new Hero(
        'Human Torch',
        ['Mister Fantastic', 'Invisible Woman', 'Thing']
    );

    @HostBinding('class') get themeClass() {
        return 'theme-light';
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */