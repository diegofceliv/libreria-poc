import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'ngx-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit{

  isLoading$ = this.spinnerService.isLoading$

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
  }
}
