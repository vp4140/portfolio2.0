import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
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
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  
  items = [
    { projectId:1,
      projectName: "Previous Portfolio",
      projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      projectPhoto: "../../../assets/home-assets/frontend.jpeg"

    },
    {
      projectId:2,
      projectName: "Previous Portfolio",
      projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      projectPhoto: "../../../assets/home-assets/frontend.jpeg"

    },
    {
      projectId:3,
      projectName: "Previous Portfolio",
      projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      projectPhoto: "../../../assets/home-assets/frontend.jpeg"

    }
  ]
  ViewuserDetail(user_id: any) {
    let url: string = "/portfolio/" + user_id;
    const data = { id: 123, name: 'John' };
    const queryParams = { id: data.id, name: data.name };
    const navigationExtras: NavigationExtras = { queryParams };
    // this.router.navigateByUrl('/example', navigationExtras);
    this.router.navigateByUrl(url, navigationExtras);
  }

}
