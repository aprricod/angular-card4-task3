import { Component, OnInit } from '@angular/core';
import { Mod1Pipe } from './mod1.pipe';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  families = ['Ivanov', 'Petrov', 'Sidorov', 'Malachov', 'Borisov'];

  constructor() {}

  ngOnInit(): void {}

  // get getFamilies(): string {
  //   return this.mod1Pipe.transform(this.families);
  // }
}
