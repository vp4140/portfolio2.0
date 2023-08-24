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
      portfolioDetails: `Hi. I’m Vishal Panchidi, a freelance Full-Stack Developer with 4 years commercial experience
      creating successful
      websites.`,
      projectDetails: [
//         {
//           projectId: 1,
//           projectName: "Lab Operation Systems",
//           projectLogo:"assets/portfolio/GCCIS/gccis-logo.jpeg",
//           projectDescription: `Labops stands as a testament to innovation and efficiency, enhancing the academic experience for all stakeholders at RIT. From fostering interactive learning environments with dynamic displays to empowering students and employees with flexible shift management, Labops covers every aspect of campus life. It's commitment to student success is further bolstered through features that promote academic support and streamlined equipment management.`,
//           projectPhoto: "assets/portfolio/GCCIS/gccis-office.jpeg",
//           // portfolio-website/src/assets/
//           projectDetails: {
//             projectName: "LabOps Systems",
//             projectGoal: "Working with Rochester Institute of Technology over 4 months, from initial idea to now a complete system with users all across RIT",
//             projectUrl:"https://labops.igm.rit.edu/labops/",
//             responsibilities:['Angular 15','PHP','Maria DB','Javascript','Angular Material'],
//             updates:[{
//               date:"20 July 2023",
//               update:"Updated to show Labops progress up to 2023"
//             }],
//             items: [
//               {
//                 subTitle: "Project Details",
//                 subTitleDetail: "Labops stands as a testament to innovation and efficiency, enhancing the academic experience for all stakeholders at RIT. From fostering interactive learning environments with dynamic displays to empowering students and employees with flexible shift management, Labops covers every aspect of campus life. It's commitment to student success is further bolstered through features that promote academic support and streamlined equipment management.",
//                 subtitleImge: "assets/portfolio/GCCIS/gccis-landing-page.jpeg",
//                 moreDetail: "Our lab displays serve as a crucial source of information for students at RIT. Here, you can find the latest updates on lab hours, special events, tutoring schedules, and engaging slideshows. To ensure smooth operations, we follow these simple guidelines for managing the displays",
//                 testimonial: [{
//                   message: "Not only is Vishal's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
//                   personName: "Ann Warren",
//                   personPosition: "Manager, Golisano College of Computing and Information Sciences"
//                 }]
//               },
//               {
//                 subTitle: "Display Schedules - Fostering Interactive Learning Environments",
//                 subTitleDetail: `Labops understands the importance of creating interactive learning environments, and our 'Display Schedules' feature is the perfect tool to achieve this. Professors and faculty members can easily access the feature through their Labops accounts. Once logged in, they are greeted with a user-friendly interface that allows them to browse through an extensive media gallery, containing images, videos, and interactive content. When planning seminars or lectures, educators can handpick media elements from the gallery that complement their teaching style and subject matter. These media items can range from eye-catching welcome messages to detailed lecture schedules with topic highlights. The options are limitless, allowing instructors to personalize their presentations and captivate students' attention from the moment they step into the classroom.`,
//                 subtitleImge: "assets/portfolio/GCCIS/display-schedule.jpeg",
//                 moreDetail:"Labops enables faculty members to seamlessly broadcast their selected media to monitors situated strategically across the campus. These monitors are strategically placed in common areas, lecture halls, and seminar rooms, ensuring that students are constantly engaged with important announcements, upcoming events, and course schedules.",


//               }, 
//               {
//                 subTitle: "Shift Management - Empowering Tech Workers and Students",
//                 subTitleDetail: `Labops goes beyond traditional academic features to cater to the needs of the tech-savvy student population and employees at RIT. With our comprehensive "Shift Management" tool, students who work on-campus, as well as other employees, can effortlessly manage their work shifts, fostering a flexible and efficient work environment.`,
//                 subtitleImge: "assets/portfolio/GCCIS/shift-management.jpeg",
//                 moreDetail:`Using their Labops accounts, students and employees can easily view their existing shifts and release them when necessary. This opens up opportunities for others seeking extra work hours or looking to fill in specific shifts. Labops optimizes the shift assignment process by cross-referencing the availability of students with their academic schedules, ensuring that work shifts do not clash with crucial classes or academic commitments.
// Through our user-friendly interface, students and employees can also indicate their availability for additional shifts, making it easier for administrators to fill vacancies when required. This streamlined approach benefits both students seeking work opportunities and the university's administrative team responsible for workforce management.`

//               }, 
//               {
//                 subTitle: "Time Change Requests - Flexibility for Students",
//                 subTitleDetail: `Recognizing the need for flexibility within the academic system, Labops introduces the "Time Change Requests" feature. When students find themselves exceeding the permissible 20-hour work limit at RIT or correct their wrong punched timings, they can easily submit time card changes through their Labops accounts.

//                 This feature provides a convenient platform for students to communicate their needs while adhering to RIT's standards and regulations. The submitted time change requests are then directed to authorized administrators who can access a secure and dedicated page.
                
//                 `,
//                 subtitleImge: "assets/portfolio/GCCIS/time-card.jpeg",
//                 moreDetail:`On this page, administrators can efficiently review and process time change requests, ensuring compliance with university policies. They have the option to edit and approve the requests, facilitating seamless adjustments to students' work hours while maintaining fair and equitable practices across the board.`

//               }, 
//               {
//                 subTitle: "Tutoring Center Management - Elevating Academic Support",
//                 subTitleDetail: `Labops recognizes the vital role tutoring centers play in supporting students' academic journeys. To optimize this crucial academic support, Labops has developed an innovative "Tutoring Center Management" feature.

//                 Tutoring center staff can easily access the feature, which provides real-time tracking of students visiting the centers for academic assistance. The intuitive interface displays the number of students currently in tutoring sessions, the number of students waiting for help, and the availability of tutors.`,
//                 subtitleImge: "assets/portfolio/GCCIS/tutoring.jpeg",
//                 moreDetail:`Tutors can utilize Labops to add valuable notes to individual student profiles, helping them keep track of progress, identify areas of improvement, and provide personalized support tailored to each student's needs. This data-driven approach empowers tutors to deliver more effective and targeted assistance, contributing to enhanced student learning outcomes.`

//               },
//               {
//                 subTitle: " Inventory System - Simplifying Equipment Management",
//                 subTitleDetail: `At the core of Labops' commitment to academic excellence is the sophisticated "Inventory System" designed specifically for the Computer Science department. Understanding the importance of proper equipment management, Labops provides a seamless process for students and faculty to request required equipment.

//                 With just a few clicks, students and faculty members can submit their equipment requests through their Labops accounts. Lab workers, responsible for approving and assigning equipment, receive notifications about pending requests and can efficiently review and grant approvals based on availability and usage policies.`,
//                 subtitleImge: "assets/portfolio/GCCIS/inventory.jpeg",
//                 moreDetail:`Labops' inventory system allows the Computer Science department to maintain accurate and up-to-date records of equipment distribution and utilization. This comprehensive tracking ensures that equipment is readily available for students' academic and research needs, eliminating unnecessary delays and maximizing the department's resources.

//                 The system also enables easy equipment retrieval and reassignment, facilitating efficient inventory management and preventing unnecessary costs associated with misplaced or unaccounted-for items.`

//               }
//             ],
            
//           },
          

//         },
        {
          projectId: 2,
          projectName: "Morgan Stanley Wealth Management",
          projectLogo: "assets/portfolio/Morgan-stanley/morgan-stanley-logo.jpeg",
          projectDescription: `As a web developer at Morgan Stanley Private Wealth Management, I play a pivotal role in delivering a cutting-edge digital experience that complements our client-centric approach to wealth management. Leveraging my expertise in Angular, C#, and microservices, I collaborate with a team of dedicated professionals to create bespoke solutions that cater to the unique needs of our esteemed clients. By combining the vast resources of a globally trusted financial services firm with the personalized touch of an investment boutique, our platform empowers families, foundations, and individuals to effectively manage the diverse aspects of their wealth and build a lasting legacy.`,
          projectPhoto: "assets/portfolio/Morgan-stanley/morgan-stanley-office.jpeg",
          projectDetails: {
            projectName: "Self Service, Wealth Management",
            responsibilities:["Angular 12", "Common UI", "C#", "Express.js","Microservices"],
            projectGoal: "Worked with Morgan Stanley for 13 months, where I enhanced my technical skills and gained on fintech domain knowledge.",
            items: [
              {
                subTitle: "Wealth Management Project Details",
                subTitleDetail: `As a web developer at Morgan Stanley Private Wealth Management, I play a pivotal role in delivering a cutting-edge digital experience that complements our client-centric approach to wealth management. Leveraging my expertise in Angular, C#, and microservices, I collaborate with a team of dedicated professionals to create bespoke solutions that cater to the unique needs of our esteemed clients. By combining the vast resources of a globally trusted financial services firm with the personalized touch of an investment boutique, our platform empowers families, foundations, and individuals to effectively manage the diverse aspects of their wealth and build a lasting legacy.`,
                subtitleImge: "assets/portfolio/Morgan-stanley/wealth-management-landing.jpeg",
                moreDetail: `Through innovative technologies and seamless user experiences, we strive to provide a hands-on tailored approach that enhances our clients' financial journeys and fosters long-lasting relationships built on trust and transparency.`,
                testimonial: [{
                  message: `Vishal is very hard working individual who can go that extra mile to complete the task with utmost precision. Although he was new to the domain, he quickly scalled up and became the go to person for our Complex Angular Application at Morgan Stanley. I highly recommend Vishal for Senior Full Stack developer role. He'll be a great asset.`,
                  personName: "Jason Kramer",
                  personPosition: "Vice President, Morgan Stanley"
                }]
              },
              {
                subTitle: "Collaborating and Re-Designing",
                subTitleDetail: `Successfully bridged the gap between two industry giants, ETRADE and Morgan Stanley. By leveraging my expertise, I spearheaded the development of Morgan Stanley Online frontend and with backend APIs that seamlessly integrated ETRADE's powerful personal trading capabilities with Morgan Stanley's unparalleled wealth management and investment planning experience. This groundbreaking integration brought together the best of both worlds, providing clients with unrivaled access to a full range of investment products and services. Through this transformative project, I not only demonstrated my technical prowess but also contributed to revolutionizing the landscape of financial services, empowering investors to make informed decisions and achieve their financial goals with utmost efficiency and convenience.`,
                subtitleImge: "assets/portfolio/Morgan-stanley/etrade-from-morgan.jpeg",

                


              }, {
                subTitle: "Designing and Building MSO Mobile Application",
                subTitleDetail: `Creating a mobile application using Angular and Common UI, the design tool used within Morgan Stanley, offers a powerful and efficient way to develop robust, responsive, and visually appealing mobile applications`,
                subtitleImge: "assets/portfolio/Morgan-stanley/ms-responsive-example.jpeg",
                moreDetail:`By integrating Common UI, the design tool employed by Morgan Stanley, developers gain access to a set of pre-designed, standardized user interface components and design patterns. This results in a consistent and unified look and feel across the application, reducing development time and eliminating the need for reinventing the wheel. Common UI enforces best practices for UI design, ensuring that the application adheres to industry standards and meets the organization's design guidelines.`

              },]
          }
        },
        {
          projectId: 3,
          projectLogo:"assets/portfolio/TCS/tcs-logo.jpeg",
          projectName: "Tata Consultancy Services",
          projectDescription: "Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design. Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.end",
          projectPhoto: "assets/portfolio/TCS/tcs-office.avif",
          projectDetails: {
            projectName: "Systems Engineer",
            projectGoal: "Was Introduced to the world of application and product development and contributed to the successful design of a comprehensive web and mobile interfaces.",
            items: [
              {
                subTitle: "Overall experience with Tata consultany services",
                subTitleDetail: "My journey began at TCS, where I had the privilege of learning and growing in the world of application and web development. Joining the company with zero industry experience, I was fortunate to be surrounded by supportive and knowledgeable colleagues who generously answered even my silliest questions, helping me evolve into the developer I am today. I started my career working on iOS development for Melbourne waters, delving into the realm of mobile applications. Later, I transitioned to web development, where I honed my skills in Java, React, and Node.js, crafting innovative and efficient web applications. This journey has been a continuous adventure of exploring new technologies and embracing challenges.",
                subtitleImge: "assets/portfolio/TCS/clients-grid.jpeg",
                moreDetail: `During my tenure at TCS, I had the incredible opportunity to work with numerous international companies as a software developer. Collaborating with clients from diverse backgrounds and industries exposed me to a wide array of projects and challenges. Through these experiences, I not only sharpened my technical expertise but also developed strong communication and collaboration skills. Working in an international setting taught me the importance of adaptability, as I had to tailor solutions to meet the unique requirements of each client. These experiences have undoubtedly enriched my understanding of global business practices and allowed me to contribute to the success of various ventures on a global scale. As I look back on my journey, I am grateful for the invaluable exposure and growth I gained from working with such esteemed international clients.
                `,
                testimonial: [{
                  message: `Vishal takes full ownership of the accounts allotted to him. As a result, he knows exactly what a task will
                  require and how much time it will take long in advance, and also informs the rest of his team so that they
                  can adjust their pace of work to meet the deadline. The ability to keep the timeline is essential in Vishal's
                  work, and he has demonstrated this ability time and time again. His commitment is truly praiseworthy, as
                  he has never missed any deadline. I can state with pride that he is a great asset to his team.`,
                  personName: "Sandeep Raghuvanshi",
                  personPosition: "Delivery Partner, TCS"
                }]
              },
              {
                subTitle: "IOS Application for TataSky - Msales, Mservice",
                subTitleDetail: `msSales is a powerful tool for the Distributors and Dealers of TataSky. Using this tool, they can onboard a subscriber as well as service existing subscribers. This is a FREE application and is user friendly and has a simple lay-out.
                mServices is an important tool which has been invented and designed for better Service Operations and for quality experience to TATA Sky customers with Quick Servicing. This Platform empowers Tata Sky Field Staff to support customer need during visit.
                Both apps were build on Cordova ,which makes this app compatible on all platforms i.e.IOS,ANDROID and WEB!`,
                testimonial: [{
                  message: `Vishal is a guy who has great potential in getting things done even if it is the first time he has come across a concept/technology. He is a very motivated person with tremendous learning potential and a strong 'never give up' attitude. He is an inspiration to all those who are starting their careers.`,
                  personName: "Mohammed Waqar",
                  personPosition: "Developer, TCS"
                }]


              }, {
                subTitle: "Building Application using Tizen OS for Rogers TV",
                subTitleDetail: `CityTv Now is a Tizen application built using web technologies, which allows users to consume CityTv's video streaming services from their Samsung Smart TV. The app allows users to view list of CityTv's telecasted shows, live and on-demand content using Samsung's native Javascript libraries to make for a good television viewing experience. Despite being a traditional web application, the focus was around optimizing the UX on large screens for a lean-back experience.`,
                testimonial: [{
                  message: `Vishal is an extremely motivated individual who is always ready to learn , he is always curious about new things and never backs out on a challenge.There is so much a professional can take from him.`,
                  personName: "Saquib Khan",
                  personPosition: "Developer, TCS"
                }]

              }, {
                subTitle: "Melbourne Waters - User Management",
                subTitleDetail: `The User Management System for Melbourne Waters had two aspects ,one of which was an IOS App built using Swift and SnapKit used by ground staff to Register and Login users and the other aspect was an Admin Dashboard which was beautifully designed in Angular 8,Angular Material and CHART JS.This System helps the Client to keep the track of the employees and their compliance on a daily basis.App being built on the latest SWIFT ,the User Experience is smooth.On the other hand the Dashboard looks attractive which was due to the beautifully designed customized charts angd Graphs.`,
                testimonial: [{
                  message: `I had mentored Vishal in his initial start of this career as a IOS application developer. He is extremely motviated to learn and take challenges.`,
                  personName: "Kaushik Savla",
                  personPosition: "Senior Developer, TCS"
                }]
              }, {
                subTitle: "Liquid Telecom - Internal User Management",
                subTitleDetail: `Inter User Management is an important tool for the Client to keep track of the users who are using the services on the daily basis. It helps the client to have an overall picture of ongoing services through extremely attractive Charts and Insights. This whole Project was developed on the latest Angular Version and inculcates almost all the Angular Features
                Internal User Management is an extremely attractive and responsive website which is developed on the Prime NG UI FrameWork and supported by Bootstrap.
                It also contains Angular Maps which covers many use cases i.e traking the user data on the map etc.`,
                testimonial: [{
                  message: `Vishal is a good team player. He works diligently on task provided to him. He is a quick learner and has a upper hand on UI development.He's an extremly grounded and hardworking individual who jells up with any team easily`,
                  personName: "Mohammed Waqar",
                  personPosition: "Developer, TCS"
                }]
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
