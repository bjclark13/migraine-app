import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'migraine-selector',
  templateUrl: './migraine-selector.component.html',
  styleUrls: ['./migraine-selector.component.scss']
})
export class MigraineSelectorComponent implements OnInit {
  max = 10;
  value = 1;

  constructor() {
  }

  ngOnInit() {
  }
}
