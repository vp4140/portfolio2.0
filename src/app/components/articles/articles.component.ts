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

    {
      articleId: "1",
      articleDate: "17 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription: "I've been involved in web development since 2000x.I've been involved in web development since 2000xI've been involved in web development since 2000x",
      articlePhoto: "../../../assets/home-assets/frontend.jpeg",
      subtopic: [
        {
          subTitle: "Preparing to Build",
          articlePhoto: "../../../assets/home-assets/frontend.jpeg",
        subTopicDescription: `I've been involved in web development since 2000. Quite possibly my favourite tool that I have used for the last 20 years is CSS. It's easy to use, lightweight, and achieves an enormous amount. It's the written language of design that makes the web look great.

        In this post, I take a look at some of the things CSS has helped me produce. This post will be included as part of my CSS3 Developer portfolio on Toptal. The Pet Plate website consisted of WordPress pages, a React conversion-flow, and Ruby based My Account area. To make for a consistent experience the CSS had to be shared across these platforms which we were able to do with minimal effort. CSS lends itself so well to reusability especially when you make use of methodologies and tools such as BEM, Sass, and CSS Modules.

        With browsers starting to consistently support newer CSS modules we were able to use features such as Flexbox and Grid. The designs for the LSU Football Ops website were visually stunning. With CSS as part of my tool belt, I was able to match the provided designs as pixel-perfect on-screen visuals. Media queries were key to ensuring the layout was suitable for all types of devices from mobile to large-screen desktop.

        On the homepage of the desktop website, the images move with the cursor. This was achieved by changing the CSS transform value with JS as the user moves their cursor. By being able to combine CSS and JS, the possibilities are endless. Sequence.js is a framework for creating animated slides and presentations. Although its features are powered by JavaScript, at its core, the JavaScript actually just controls the state of the slides by changing class names that then allow for applying styles and transitions via CSS. The intention for this open-source project was to give designers and developers out-of-the-box JavaScript tools necessary for a slideshow so they didn't need to know JavaScript. They simply apply their styling and slide animations via CSS. It's a simple concept that is actually incredibly powerful -- allowing for an infinite amount of styles and themes. See the Theme Store for what can be achieved.

        Another benefit of using CSS for the animations was that many devices use hardware-acceleration for them. This means they are powered by the device's graphics processing unit for much smoother animation.`
        },
        
        {
          subTitle: "Gatsby",
         
          subCode:`.footer-profile{
            display: flex;
            // align-items: center;
           
            .custom-image{
              margin-right: 1rem;
              .small-circle-image {
                width: 10rem;
                height: 10rem;
                // border-radius: 50%; /* This makes the image circularssssssec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality.  */
              }
            }
            .custom-message{
              font-size: 20px;
              max-width: 25rem;
              line-height: 1.7rem;;
              font-weight: 100;
            }
         
            .custom-image{
              margin-right: 1rem;
              .small-circle-image {
                width: 10rem;
                height: 10rem;
                // border-radius: 50%; /* This makes the image circularssssssec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality.  */
              }
            }
            .custom-message{
              font-size: 20px;
              max-width: 25rem;
              line-height: 1.7rem;;
              font-weight: 100;
            }.custom-image{
              margin-right: 1rem;
              .small-circle-image {
                width: 10rem;
                height: 10rem;
                // border-radius: 50%; /* This makes the image circularssssssec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality.  */
              }
            }
            .custom-message{
              font-size: 20px;
              max-width: 25rem;
              line-height: 1.7rem;;
              font-weight: 100;
            }
          }`,
          moreDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",

          subTopicDescription: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
        },
        {
          subTitle: "Gatsby Images",
          articlePhoto: "../../../assets/home-assets/frontend.jpeg",

          subTopicDescription: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
        },
        {
          subTitle: "Build Speed",
          articlePhoto: "../../../assets/home-assets/frontend.jpeg",
          subTopicDescription: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
        }, {
          subTitle: "Conclusion",
          // articlePhoto: "../../../assets/home-assets/frontend.jpeg",
          subTopicDescription: "Gatsby has some great performance features and its heart is in the right place when trying to simplify certain areas of basic web publishing such as handling images. The learning curve was a little steeper than I had hoped but now having experienced the worst, Gatsby is another tool worth keeping in mind for future projects. My aim when creating my portfolio was to do it in a short period of time. Gatsby enabled me to do that. There were some unexpected issues mentioned above that slowed me a little but these could probably be solved by digging deeper into Gatsby; creating my own plugin(s) and getting more involved with Gatsby's open-source community. Something for my next Gatsby project.",
        },],
    },
    {
      articleId: "2",
      articleDate: "18 July 2017",
      articleName: "20 Years Experience with CSS",
      articleDescription: "I've been involved in web development since 2000x.I've been involved in web development since 2000xI've been involved in web development since 2000x",
      articlePhoto: "../../../assets/home-assets/frontend.jpeg",
      subtopic: [
        {
          subTitle: "Preparing to Build",
          articlePhoto: "../../../assets/home-assets/frontend.jpeg",
        subTopicDescription: `My previous website was based on WordPress and I also had a store powered by WooCommerce that I wanted to keep. In my initial research, it looked like it was going to be possible to continue to manage my content and store via WordPress and WooCommerce as Gatsby had plugins and many tutorials for integrating but it quickly became obvious that neither WordPress-in-Gatsby or WooCommerce-in-Gatsby plugins were fully realized. Whilst you can source content from both platforms, the features offered aren't paralleled in Gatsby. I could get the store content via the gatsby-source-woocommerce plugin but managing cart, checking out, etc would all be functionality I'd have to write myself. This is understandable, trying to recreate features in Gatsby and then maintain them would be time consuming.</p><p>The most efficient option was to leave the store as it was in WooCommerce. The store was never really contextually relevant to my portfolio or blog anyway and this gave me an opportunity to update to the latest version of WooCommerce and change to an official WooCommerce store theme rather than a custom-built one that took more time to maintain. I moved the store from ianlunn.co.uk/store to store.ianlunn.co.uk and used DNS to point store.ianlunn.co.uk to the server it was originally hosted on. The Gatsby website would be hosted on Netlify at ianlunn.co.uk.</p><p>My initial intention for the WordPress content was to leave it in WordPress and source it via gatsby-source-wordpress at build time. Each time I ran the gatsby develop command to start a local development server, the source plugin would pull content from WordPress. I found this to be very slow. I imagine there are options that would allow for only targeting certain parts of WordPress to reduce the amount of time this takes and there's also a cache that means you don't have to do this each time, but I found I often had to clear the cache to work around other issues. As my WordPress content was already written in Markdown anyway, and I didn't really need the other features of WordPress, I decided to move away from it entirely and source my content directly in Markdown.</p><p>I used wordpress-export-to-markdown to convert WordPress content to markdown which worked extremely well. My WordPress content was already written in Markdown but this script saved a lot of time because it saved images and similar media in a suitable format and converted post properties such as slug and date to frontmatter (a simple format for assigning metadata in a Markdown file).</p><p>With the store its own entity on a subdomain and my content simply stored in the website repo as Markdown, it feels like a far better separation of concerns that is easier to maintain."`
        },
        
        {
          subTitle: "Gatsby",
         
          subCode:`.footer-profile{
            display: flex;
            // align-items: center;
           
            .custom-image{
              margin-right: 1rem;
              .small-circle-image {
                width: 10rem;
                height: 10rem;
                // border-radius: 50%; /* This makes the image circularssssssec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality.  */
              }
            }
            .custom-message{
              font-size: 20px;
              max-width: 25rem;
              line-height: 1.7rem;;
              font-weight: 100;
            }
         
            .custom-image{
              margin-right: 1rem;
              .small-circle-image {
                width: 10rem;
                height: 10rem;
                // border-radius: 50%; /* This makes the image circularssssssec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality.  */
              }
            }
            .custom-message{
              font-size: 20px;
              max-width: 25rem;
              line-height: 1.7rem;;
              font-weight: 100;
            }.custom-image{
              margin-right: 1rem;
              .small-circle-image {
                width: 10rem;
                height: 10rem;
                // border-radius: 50%; /* This makes the image circularssssssec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality. ec, he pays attention to improve the aesthetics of the site as well as the functionality.  */
              }
            }
            .custom-message{
              font-size: 20px;
              max-width: 25rem;
              line-height: 1.7rem;;
              font-weight: 100;
            }
          }`,
          moreDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",

          subTopicDescription: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
        },
        {
          subTitle: "Gatsby Images",
          articlePhoto: "../../../assets/home-assets/frontend.jpeg",

          subTopicDescription: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
        },
        {
          subTitle: "Build Speed",
          articlePhoto: "../../../assets/home-assets/frontend.jpeg",
          subTopicDescription: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
        }, {
          subTitle: "Conclusion",
          // articlePhoto: "../../../assets/home-assets/frontend.jpeg",
          subTopicDescription: "Gatsby has some great performance features and its heart is in the right place when trying to simplify certain areas of basic web publishing such as handling images. The learning curve was a little steeper than I had hoped but now having experienced the worst, Gatsby is another tool worth keeping in mind for future projects. My aim when creating my portfolio was to do it in a short period of time. Gatsby enabled me to do that. There were some unexpected issues mentioned above that slowed me a little but these could probably be solved by digging deeper into Gatsby; creating my own plugin(s) and getting more involved with Gatsby's open-source community. Something for my next Gatsby project.",
        },],
    },
    {articleId:"3",
      articleDate:"19 July 2017",
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
  ViewuserDetail(user_id: any,articleDetails:any) {
    let url: string = "/articles/" + user_id;
  const navigationExtras: NavigationExtras = {
    state: articleDetails
  };
    this.router.navigateByUrl(url,navigationExtras);
  }
}
