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
  items = [
    {
      projectName: "Previous Portfolio",
      projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      projectPhoto: "../../../assets/home-assets/frontend.jpeg"

    },
    {
      projectName: "Previous Portfolio",
      projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      projectPhoto: "../../../assets/home-assets/frontend.jpeg"

    },
    {
      projectName: "Previous Portfolio",
      projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      projectPhoto: "../../../assets/home-assets/frontend.jpeg"

    }
  ]

}
