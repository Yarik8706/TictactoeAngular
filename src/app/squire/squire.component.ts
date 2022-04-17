import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-squire',
  templateUrl: './squire.component.html',
  styleUrls: ['./squire.component.scss']
})
export class SquireComponent implements OnInit {

  @Input() value: String;

  constructor() { }

  ngOnInit(): void {
  }

}
