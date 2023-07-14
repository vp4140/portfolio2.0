import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(){
// console.log(this.FromHome)
  }
  homeDetails = {
    position: "Successful Full-Stack Developer",
    positionDetails: `Hi. I’m Vishal Panchidi, a freelance Front-end Developer with 4 years commercial experience
    creating successful
    websites.`,
    primaryRoles:[
      {   title:"Frontend Development",
          description:"Responsive websites built for an optimal user experience that achieves your business goals",
          path:"../../../assets/home-assets/frontend.jpeg"
  
      },{ title:"Backend Development",
          description:"Storong backend architecturen built with authentications services and semless flow betweeen database and frontend applications",
          path:"../../../assets/home-assets/backend.jpeg"
      },
      { title:"Mobile Application Development",
          description:"Storong backend architecturen built with authentications services and semless flow betweeen database and frontend applications",
          path:"../../../assets/home-assets/mobile.jpeg"
      }
      
    ]
    }

}
