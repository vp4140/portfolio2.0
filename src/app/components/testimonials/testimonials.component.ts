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
      testimonialSubtitle: `have 12 years commercial experience helping start-ups, small businesses, and agencies
      create successful websites.`,
      testimonialDetails: [
        {
          testimonialId: 1,
          companyName: "Morgan Stanley",
          employeeName: "Velavan Mani",
          employeeReview: ` Not only was Ian’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well
          as the
          functionality. Throughout the entire process he is responsive, and willing to work through issues as they
          arise. It’s
          obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.`,
  
        },
        {
          testimonialId: 1,
          companyName: "TCS",
          employeeName: "Saquib Khan",
          employeeReview: ` Not only was Ian’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well
          as the
          functionality. Throughout the entire process he is responsive, and willing to work through issues as they
          arise. It’s
          obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.`,
  
        },
        {
          testimonialId: 1,
          companyName: "TCS",
          employeeName: "Rahul Pillai",
          employeeReview: ` Not only was Ian’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well
          as the
          functionality. Throughout the entire process he is responsive, and willing to work through issues as they
          arise. It’s
          obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.`,
  
        },
        {
          testimonialId: 1,
          companyName: "GCCIS",
          employeeName: "Ann Warren",
          employeeReview: ` Not only was Ian’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well
          as the
          functionality. Throughout the entire process he is responsive, and willing to work through issues as they
          arise. It’s
          obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.`,
  
        },
        {
          testimonialId: 1,
          companyName: "Freelancer",
          employeeName: "Rohan Sharma",
          employeeReview: ` Not only was Ian’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well
          as the
          functionality. Throughout the entire process he is responsive, and willing to work through issues as they
          arise. It’s
          obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.`,
  
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
