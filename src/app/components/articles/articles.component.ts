import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  items = [
    { articleDate:"17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription:"I've been involved in web development since 2000. Quite possibly my favourite tool that I have used for the last 20 years is CSS. It's easy to use, lightweight, and achieves an enormous amount. It's the written language of design that makes the web look great. In this post, I take a look at some of…",      
      articlePhoto: "../../../assets/home-assets/frontend.jpeg"
    },
    {
      articleDate:"17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      articlePhoto: "../../../assets/home-assets/frontend.jpeg"

    },
    {
      articleDate:"17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      articlePhoto: "../../../assets/home-assets/frontend.jpeg"

    },
    {
      articleDate:"17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      articlePhoto: "../../../assets/home-assets/frontend.jpeg"

    }
  ]
}
