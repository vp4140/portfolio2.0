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
          projectPhoto: "../../../assets/portfolio/GCCIS/gccis-office.jpeg",
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
                subTitleDetail: "Labops stands as a testament to innovation and efficiency, enhancing the academic experience for all stakeholders at RIT. From fostering interactive learning environments with dynamic displays to empowering students and employees with flexible shift management, Labops covers every aspect of campus life. It's commitment to student success is further bolstered through features that promote academic support and streamlined equipment management.",
                subtitleImge: "../../../assets/portfolio/GCCIS/gccis-landing-page.jpeg",
                moreDetail: "Our lab displays serve as a crucial source of information for students at RIT. Here, you can find the latest updates on lab hours, special events, tutoring schedules, and engaging slideshows. To ensure smooth operations, we follow these simple guidelines for managing the displays",
                testimonial: [{
                  message: "Not only is Vishal's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
                  personName: "Ann Warren",
                  personPosition: "Manager, Golisano College of Computing and Information Sciences"
                }]
              },
              {
                subTitle: "Display Schedules - Fostering Interactive Learning Environments",
                subTitleDetail: `Labops understands the importance of creating interactive learning environments, and our 'Display Schedules' feature is the perfect tool to achieve this. Professors and faculty members can easily access the feature through their Labops accounts. Once logged in, they are greeted with a user-friendly interface that allows them to browse through an extensive media gallery, containing images, videos, and interactive content. When planning seminars or lectures, educators can handpick media elements from the gallery that complement their teaching style and subject matter. These media items can range from eye-catching welcome messages to detailed lecture schedules with topic highlights. The options are limitless, allowing instructors to personalize their presentations and captivate students' attention from the moment they step into the classroom.`,
                subtitleImge: "../../../assets/portfolio/GCCIS/display-schedule.jpeg",
                moreDetail:"Labops enables faculty members to seamlessly broadcast their selected media to monitors situated strategically across the campus. These monitors are strategically placed in common areas, lecture halls, and seminar rooms, ensuring that students are constantly engaged with important announcements, upcoming events, and course schedules.",


              }, 
              {
                subTitle: "Shift Management - Empowering Tech Workers and Students",
                subTitleDetail: `Labops goes beyond traditional academic features to cater to the needs of the tech-savvy student population and employees at RIT. With our comprehensive "Shift Management" tool, students who work on-campus, as well as other employees, can effortlessly manage their work shifts, fostering a flexible and efficient work environment.`,
                subtitleImge: "../../../assets/portfolio/GCCIS/shift-management.jpeg",
                moreDetail:`Using their Labops accounts, students and employees can easily view their existing shifts and release them when necessary. This opens up opportunities for others seeking extra work hours or looking to fill in specific shifts. Labops optimizes the shift assignment process by cross-referencing the availability of students with their academic schedules, ensuring that work shifts do not clash with crucial classes or academic commitments.
Through our user-friendly interface, students and employees can also indicate their availability for additional shifts, making it easier for administrators to fill vacancies when required. This streamlined approach benefits both students seeking work opportunities and the university's administrative team responsible for workforce management.`

              }, 
              {
                subTitle: "Time Change Requests - Flexibility for Students",
                subTitleDetail: `Recognizing the need for flexibility within the academic system, Labops introduces the "Time Change Requests" feature. When students find themselves exceeding the permissible 20-hour work limit at RIT or correct their wrong punched timings, they can easily submit time card changes through their Labops accounts.

                This feature provides a convenient platform for students to communicate their needs while adhering to RIT's standards and regulations. The submitted time change requests are then directed to authorized administrators who can access a secure and dedicated page.
                
                `,
                subtitleImge: "../../../assets/portfolio/GCCIS/time-card.jpeg",
                moreDetail:`On this page, administrators can efficiently review and process time change requests, ensuring compliance with university policies. They have the option to edit and approve the requests, facilitating seamless adjustments to students' work hours while maintaining fair and equitable practices across the board.`

              }, 
              {
                subTitle: "Tutoring Center Management - Elevating Academic Support",
                subTitleDetail: `Labops recognizes the vital role tutoring centers play in supporting students' academic journeys. To optimize this crucial academic support, Labops has developed an innovative "Tutoring Center Management" feature.

                Tutoring center staff can easily access the feature, which provides real-time tracking of students visiting the centers for academic assistance. The intuitive interface displays the number of students currently in tutoring sessions, the number of students waiting for help, and the availability of tutors.`,
                subtitleImge: "../../../assets/portfolio/GCCIS/tutoring.jpeg",
                moreDetail:`Tutors can utilize Labops to add valuable notes to individual student profiles, helping them keep track of progress, identify areas of improvement, and provide personalized support tailored to each student's needs. This data-driven approach empowers tutors to deliver more effective and targeted assistance, contributing to enhanced student learning outcomes.`

              },
              {
                subTitle: " Inventory System - Simplifying Equipment Management",
                subTitleDetail: `At the core of Labops' commitment to academic excellence is the sophisticated "Inventory System" designed specifically for the Computer Science department. Understanding the importance of proper equipment management, Labops provides a seamless process for students and faculty to request required equipment.

                With just a few clicks, students and faculty members can submit their equipment requests through their Labops accounts. Lab workers, responsible for approving and assigning equipment, receive notifications about pending requests and can efficiently review and grant approvals based on availability and usage policies.`,
                subtitleImge: "../../../assets/portfolio/GCCIS/inventory.jpeg",
                moreDetail:`Labops' inventory system allows the Computer Science department to maintain accurate and up-to-date records of equipment distribution and utilization. This comprehensive tracking ensures that equipment is readily available for students' academic and research needs, eliminating unnecessary delays and maximizing the department's resources.

                The system also enables easy equipment retrieval and reassignment, facilitating efficient inventory management and preventing unnecessary costs associated with misplaced or unaccounted-for items.`

              }
            ],
            
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
