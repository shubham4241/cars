import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

// interface Car {
// model:string;
// year:string;
// price:number;
// img:string;
// } 

export class CarComponent implements OnInit {
 model:string = '';
   car : any 

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log('car')
  }

  ngOnInit(): void {
     this.activatedRoute.queryParams.subscribe(res => { 
      this.car = res;
    console.log(this.car)
    });
  }

  carSedan =[
    {id:1,model: 'Honda Accord', year:'2022',price:38050, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614825/2022_honda_accord_sedan_angularfront.jpg'},
    {id:2,model: 'Hyundai Sonata', year:'2022',price:34750, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/custom/14725/2022_Hyundai_Sonata_1.jpg'},
    {id:3,model: 'Kia K5', year:'2022',price:31190, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614616/2022_kia_k5_angularfront.jpg'},
    {id:4,model: 'Nissan Altima', year:'2022',price:34450, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614887/2022_nissan_altima_angularfront.jpg'},
     ];

     ch =[
      {id:1,model: 'Honda Accord', year:'2022',price:38050, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614825/2022_honda_accord_sedan_angularfront.jpg'},
      {id:2,model: 'Hyundai Sonata', year:'2022',price:34750, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/custom/14725/2022_Hyundai_Sonata_1.jpg'},
      {id:3,model: 'Kia K5', year:'2022',price:31190, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614616/2022_kia_k5_angularfront.jpg'},
      {id:4,model: 'Nissan Altima', year:'2022',price:34450, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614887/2022_nissan_altima_angularfront.jpg'},
       ];

       cc =[
        {id:1,model: 'Honda Accord', year:'2022',price:38050, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614825/2022_honda_accord_sedan_angularfront.jpg'},
        {id:2,model: 'Hyundai Sonata', year:'2022',price:34750, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/custom/14725/2022_Hyundai_Sonata_1.jpg'},
        {id:3,model: 'Kia K5', year:'2022',price:31190, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614616/2022_kia_k5_angularfront.jpg'},
        {id:4,model: 'Nissan Altima', year:'2022',price:34450, img:'https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i159614887/2022_nissan_altima_angularfront.jpg'},
         ];

}
