import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  items=[
    {   title:"Frontend Development",
        description:"Responsive websites built for an optimal user experience that achieves your business goals",
        path:"../../../assets/home-assets/frontend.jpeg"

    },
    
    // { title:"Backend Development",
    //     description:"Storong backend architecturen built with authentications services and semless flow betweeen database and frontend applications",
    //     path:"../../../assets/backend.jpeg"
    // },
    // { title:"Mobile Application Development",
    //     description:"Storong backend architecturen built with authentications services and semless flow betweeen database and frontend applications",
    //     path:"../../../assets/mobile.jpeg"
    // }
    
  ]
  tiles: Tile[] = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    
  ];
}
