import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroTeamComponent } from './hero-team.component';

@Component({
    selector: 'hero-details',
    template: `
    <h2>{{hero.name}}</h2>
    <hero-team [hero]=hero></hero-team>
    <ng-content></ng-content>
  `,
    styleUrls: ['app/hero-details.component.css'],
    directives: [HeroTeamComponent]
})
export class HeroDetailsComponent {
    @Input() hero: Hero;
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */