import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery: any;
declare const jQuery: any;
declare const $: any;

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    // New Arrival Tab View
    $("#feature").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 2],
        [992, 3],
        [1200, 3],
        [1590, 4]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    // On Sale Tab View
    $("#latest").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 2],
        [992, 3],
        [1200, 3],
        [1590, 4]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    // To Categories This Week 
    $("#bestseller").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 2],
        [992, 3],
        [1200, 3],
        [1590, 4]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    //  Gadgets & Mobile Accessories 
    $(".tab-content .tab-pane #cattab").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 1],
        [768, 1],
        [992, 2],
        [1200, 2],
        [1590, 3]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    // Recently View Products
    $("#special").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 1],
        [992, 2],
        [1200, 2],
        [1590, 3]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });


    // Newsletter Message
    // $("#newsletter_5b3f6107e5cd2").webiNewsletter().work(  'Email is not valid!' );
  }
}