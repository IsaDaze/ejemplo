import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'z0-home',
  templateUrl: './z0-home.component.html',
  styleUrls: ['./z0-home.component.css']
})
export class Z0HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true
      });
    });

  }
  ngAfterViewInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true
      });
    });
  }

}
