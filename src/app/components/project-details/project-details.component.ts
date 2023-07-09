import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {
  
  mainItem:any;



  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.mainItem= history.state; 
    console.log("Here")
    // console.log(name)
   
  }


  splitIntoParagraphs(text: string): string[] {
    const sentences = text.split('. ');
    const paragraphs: string[] = [];
  
    let currentParagraph = '';
    for (let i = 0; i < sentences.length; i++) {
      currentParagraph += sentences[i] + '. ';
  
      if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
        paragraphs.push(currentParagraph.trim());
        currentParagraph = '';
      }
    }
  
    return paragraphs;
  }

}
