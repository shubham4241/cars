import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sedan',
  templateUrl: './sedan.component.html',
  styleUrls: ['./sedan.component.css']
})
export class SedanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  car =[
    {model: 'Honda Accord', year:'2022',price:38050, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614825/2022_honda_accord_sedan_angularfront.jpg'},
    {model: 'Hyundai Sonata', year:'2022',price:34750, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/custom/14725/2022_Hyundai_Sonata_1.jpg'},
    {model: 'Kia K5', year:'2022',price:31190, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614616/2022_kia_k5_angularfront.jpg'},
    {model: 'Nissan Altima', year:'2022',price:34450, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614887/2022_nissan_altima_angularfront.jpg'},
     ];

}
