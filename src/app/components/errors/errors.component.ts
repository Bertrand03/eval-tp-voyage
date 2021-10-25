import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() controlLabel: string;
  constructor() { }

  ngOnInit(): void {
  }

}
