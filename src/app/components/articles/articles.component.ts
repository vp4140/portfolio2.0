import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
 

  constructor(private router:Router){

  }
  items = [

    { articleId:"1",
      articleDate:"17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription:"I've been involved in web development since 2000. Quite possibly my favourite tool that I have used for the last 20 years is CSS. It's easy to use, lightweight, and achieves an enormous amount. It's the written language of design that makes the web look great. In this post, I take a look at some of…",      
      articlePhoto: "../../../assets/home-assets/frontend.jpeg"
    },
    {
      articleId:"2",
      articleDate:"17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      articlePhoto: "../../../assets/home-assets/frontend.jpeg"

    },
    {articleId:"3",
      articleDate:"17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      articlePhoto: "../../../assets/home-assets/frontend.jpeg"

    },
    {
      articleId:"4",
      articleDate:"17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
      articlePhoto: "../../../assets/home-assets/frontend.jpeg"

    }
  ]
  ViewuserDetail(user_id: any) {
    console.log("here")
    let url: string = "/articles/" + user_id;
    const data = { id: 123, name: 'John' };
    const queryParams = { id: data.id, name: data.name };
    const navigationExtras: NavigationExtras = { queryParams };
    // this.router.navigateByUrl('/example', navigationExtras);
    this.router.navigateByUrl(url, navigationExtras);
  }
}
