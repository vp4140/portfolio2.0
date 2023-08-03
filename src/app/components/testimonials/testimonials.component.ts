import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  items: any[] = Array(10).fill({});
  testimonialData: any
  @Input() fromHome: string="false";
  ngOnInit() {
    // console.log(this.fromHome)
    this.testimonialData= {
      testimonialTitle: "Testimonials",
      testimonialSubtitle: `have 4 years commercial experience helping start-ups, small businesses, and agencies
      create successful websites.`,
      testimonialDetails: [
        {
          testimonialId: 1,
          message: `Vishal takes full ownership of the accounts allotted to him. As a result, he knows exactly what a task will
          require and how much time it will take long in advance, and also informs the rest of his team so that they
          can adjust their pace of work to meet the deadline. The ability to keep the timeline is essential in Vishal's
          work, and he has demonstrated this ability time and time again. His commitment is truly praiseworthy, as
          he has never missed any deadline. I can state with pride that he is a great asset to his team.`,
          personName: "Sandeep Raghuvanshi",
          personPosition: "Delivery Partner, TCS"
  
        },
        {
          testimonialId: 1,
          message: `Vishal is a guy who has great potential in getting things done even if it is the first time he has come across a concept/technology. He is a very motivated person with tremendous learning potential and a strong 'never give up' attitude. He is an inspiration to all those who are starting their careers.`,
                  personName: "Mohammed Waqar",
                  personPosition: "Developer, TCS"
  
        },
        {
          testimonialId: 1,
          message: `Vishal is an extremely motivated individual who is always ready to learn , he is always curious about new things and never backs out on a challenge.There is so much a professional can take from him.`,
                  personName: "Saquib Khan",
                  personPosition: "Developer, TCS"
  
        },
        {
          testimonialId: 1,
          message: "Not only is Vishal's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
          personName: "Ann Warren",
          personPosition: "Manager, Golisano College of Computing and Information Sciences"
        },
        {
          testimonialId: 1,
          message: `I had mentored Vishal in his initial start of this career as a IOS application developer. He is extremely motviated to learn and take challenges.`,
          personName: "Kaushik Savla",
          personPosition: "Senior Developer, TCS"
  
        },
     
      ]
    }
  if(this.fromHome =="true"){
    console.log("homee")
    const slicedArray= this.testimonialData.testimonialDetails.slice(0, 2);
    console.log(slicedArray);
    this.testimonialData.testimonialDetails = slicedArray
  }
 


  }

}
