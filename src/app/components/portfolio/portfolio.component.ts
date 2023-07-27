import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
  portfolioDetails!:any;
  constructor(private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute) { }
  @Input() fromHome: string="false";
  ngOnInit() {
    console.log(this.fromHome)
    this.portfolioDetails = {
      portfolioTitle: "Successful Full-Stack Developer",
      portfolioDetails: `Hi. I’m Vishal Panchidi, a freelance Front-end Developer with 4 years commercial experience
      creating successful
      websites.`,
      projectDetails: [
        {
          projectId: 1,
          projectName: "Lab Operation Systems",
          projectLogo:"../../../assets/portfolio/GCCIS/gccis-logo.jpeg",
          projectDescription: "Lab displays around various labs at Rochester Institute of Technology are used to communicate important information to students. These displays show lab hours, special events, tutoring hours, and slideshows. The events managed through the Event Management System (EMS) must have their open hours entered in the system. However, for labs or events not maintained by EMS, the information can be manually entered here.",
          projectPhoto: "../../../assets/portfolio/GCCIS/gccis-landing-page.jpeg",
          // portfolio-website/src/assets/
          projectDetails: {
            projectName: "LabOps Systems",
            projectGoal: "Working with Rochester Institute of Technology over 4 months, from initial idea to now a complete system with users all across RIT",
            responsibilities:['Angular 15','PHP','Maria DB','Javascript','Angular Material'],
            updates:[{
              date:"20 July 2023",
              update:"Updated to show Labops progress up to 2023"
            }],
            items: [
              {
                subTitle: "Project Details",
                subTitleDetail: "Lab displays around various labs at RIT are used to communicate important information to students. These displays show lab hours, special events, tutoring hours, and slideshows. The events managed through the Event Management System (EMS) must have their open hours entered in the system. However, for labs or events not maintained by EMS, the information can be manually entered here",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg",
                moreDetail: "Our lab displays serve as a crucial source of information for students at RIT. Here, you can find the latest updates on lab hours, special events, tutoring schedules, and engaging slideshows. To ensure smooth operations, we follow these simple guidelines for managing the displays",
                testimonial: [{
                  message: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
                  personName: "Renaldo Webb",
                  personPosition: "Founder of Pet Plate"
                }]
              },
              {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg",
                moreDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",


              }, 
              {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }, 
              {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }, 
              {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }],
            
          },
          

        },
        {
          projectId: 2,
          projectName: "Previous Portfolio",
          projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
          projectPhoto: "../../../assets/home-assets/frontend.jpeg",
          projectDetails: {
            projectName: "Project Two",
            projectGoal: "Working with Pet Plate over 5 years, from initial idea to now a company with a total investment fund of $13 million dollars",
            items: [
              {
                subTitle: "Project Details",
                subTitleDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.<br> Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg",
                moreDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
                testimonial: [{
                  message: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
                  personName: "Renaldo Webb",
                  personPosition: "Founder of Pet Plate"
                }]
              },
              {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg",
                moreDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",


              }, {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }, {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }, {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }]
          }
        },
        {
          projectId: 3,
          projectName: "Previous Portfolio",
          projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
          projectPhoto: "../../../assets/home-assets/frontend.jpeg",
          projectDetails: {
            projectName: "Project three",
            projectGoal: "Working with Pet Plate over 5 years, from initial idea to now a company with a total investment fund of $13 million dollars",
            items: [
              {
                subTitle: "Project Details",
                subTitleDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.<br> Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg",
                moreDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
                testimonial: [{
                  message: "Not only is Ian's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
                  personName: "Renaldo Webb",
                  personPosition: "Founder of Pet Plate"
                }]
              },
              {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg",
                moreDetail: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",


              }, {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }, {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }, {
                subTitle: "Creating the Conversion Flow",
                subTitleDetail: "The conversion flow is where the user gives information about their pet, receive a recommended food plan, be given a choice of meals, and finally complete their subscription by checking out. This was obviously a hugely important part of the website The early versions of the conversion flow were HTML/CSS templates rendered by a Ruby on Rails server and relied on jQuery for interaction. In 2016, after Pet Plate's initial round of investment, I was responsible for front-end development of a newly redesigned conversion flow and opted to build using React and Redux. Given that the conversion flow acted like a survey, we created a single page application that would allow the user to quickly navigate through the questions and go back to make adjustments should they wish. This was a much faster way of navigation rather than having the server render each page as we previously had. The Ruby on Rails server became responsible for serving APIs that the front-end relied on to get and post data as necessary. We took special care to design the APIs in a way that meant we could interact with the server with minimal amount of wait time for the user. On a reliable connection, the only time the user had to wait was when their plan recommendation is prepared -- we actually manufactured a slight delay to give the impression some important calculations were happening",
                subtitleImge: "../../../assets/home-assets/frontend.jpeg"

              }]
          }

        }
      ]
    }
  if(this.fromHome =="true"){
    console.log("homee")
    const slicedArray= this.portfolioDetails.projectDetails.slice(0, 2);
    console.log(slicedArray);
    this.portfolioDetails.projectDetails = slicedArray
  }
 


  }


  ViewuserDetail(user_id: any,projectDetails:any) {
    let url: string = "/portfolio/" + user_id;
  const navigationExtras: NavigationExtras = {
    state: projectDetails
  };
    this.router.navigateByUrl(url,navigationExtras);
  }

}
