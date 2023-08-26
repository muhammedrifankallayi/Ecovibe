import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements  OnInit{


  cardItems: any[] = [];

  ngOnInit() {
    // Populate cardItems array with your data
    this.cardItems = [
      {
        title: 'Monthly Plan',
        price: 999,
        duration: '3 MONTH',
        cardTitle: 'Card title 1',
        cardText: 'This is a wider card with supporting text...',
      },
      {
        title: 'Another Plan',
        price: 1499,
        duration: '6 MONTH',
        cardTitle: 'Card title 2',
        cardText: 'This is another card with some content...',
      },{
        title: 'Another Plan',
        price: 1499,
        duration: '6 MONTH',
        cardTitle: 'Card title 2',
        cardText: 'This is another card with some content...',
      },{
        title: 'Another Plan',
        price: 1499,
        duration: '6 MONTH',
        cardTitle: 'Card title 2',
        cardText: 'This is another card with some content...',
      },{
        title: 'Another Plan',
        price: 1499,
        duration: '6 MONTH',
        cardTitle: 'Card title 2',
        cardText: 'This is another card with some content...',
      },{
        title: 'Another Plan',
        price: 1499,
        duration: '6 MONTH',
        cardTitle: 'Card title 2',
        cardText: 'This is another card with some content...',
      },
      // Add more card items as needed
    ];
  }



}
