import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  items: any
  ngOnInit(): void {
    console.log(history.state)
    this.items = history.state; 
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
