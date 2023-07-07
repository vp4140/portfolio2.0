import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutDetails = {
    aboutTitle: "About Vishal Panchidi",
    aboutTitlDetail: "I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.",
    aboutParagraphs: "My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences. My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences. My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences. My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.",

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
